import {
  $,
  component$,
  isDev,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

import { ProductStoreContext } from "~/context/product-store";
import { AuthContext } from "~/context/auth";
import { AuthContextType, Product } from "~/types/types";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
  const productStore = useStore<{ products: Product[]; cart: Product[]; recents: Product[] }>({
    products: [],
    cart: [],
    recents: [],
  });

  const auth = useStore<AuthContextType>({
    auth: {
      loggedIn: false,
    },
  });

  useContextProvider(ProductStoreContext, productStore);
  useContextProvider(AuthContext, auth);

  const getProducts = $(async () => {
    const res = await fetch("http://localhost:8000/api/products/index");
    const data = await res.json();
    data.map((dat: Product) => (dat.cart = false));
    if (productStore.products.length === 0) {
      productStore.products = data;
      productStore.recents = [...data].sort(() => Math.random() - 0.5).slice(0, 4);
    }
  });
  const checkUser = $(async () => {
    await fetch("http://localhost:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });
    await fetch("http://localhost:8000/api/user", {
      method: "GET",
      headers: {
        // "Content-Type": "application/json",
        credentials: "include",
        Authorization: `Bearer ` + localStorage.getItem("authentication") || "",
      },
      credentials: "include",
    })
      .then((res) => {
        auth.auth.loggedIn = res.status === 200 ? true : false;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  useVisibleTask$(() => {
    checkUser();
    // getProducts();
  });

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
