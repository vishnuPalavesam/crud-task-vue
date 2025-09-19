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

  const authState = useStore<AuthContextType>({
    loggedIn: false,
  });

  const getProducts = $(async () => {
    const res = await fetch("/api/products/index");
    const data = await res.json();
    data.map((dat: Product) => (dat.cart = false));
    if (productStore.products.length === 0) {
      productStore.products = data;
      productStore.recents = [...data].sort(() => Math.random() - 0.5).slice(0, 4);
    }
  });

  const checkUser = $(async () => {
    await fetch("/api/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authorization: `Bearer ` + localStorage.getItem("authentication") || "",
      },
      credentials: "include",
    })
      .then(async (res) => {
        const data = await res.json();
        authState.loggedIn = res.status === 200 && data.id ? true : false;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useVisibleTask$(() => {
    checkUser();
    getProducts();
  });

  useContextProvider(ProductStoreContext, productStore);
  useContextProvider(AuthContext, authState);
  console.log("from root", authState.loggedIn);

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && <link rel="manifest" href={`${import.meta.env.BASE_URL}manifest.json`} />}
        <RouterHead />

        <script
          dangerouslySetInnerHTML={`
        (function() {
          function setTheme(theme) {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
          }
          const theme = localStorage.getItem('theme') || "light";

          if (theme) {
            setTheme(theme);
          } else {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
              setTheme('dark');}
              else {
                setTheme('light');}}
        })();
        window.addEventListener('load', function() {
          const themeSwitch = document.getElementById('hide-checkbox');
          // themeSwitch.checked = localStorage.getItem('theme') === 'light'? true: false;
        }
        );
      `}
        ></script>
      </head>
      <body lang="en" class="dark:bg-gray-900 dark:text-white">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  );
});
