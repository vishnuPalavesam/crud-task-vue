import { $, component$, useContext, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { AuthContext } from "~/context/auth";
import { ProductStoreContext } from "~/context/product-store";
// import { AuthContext } from "~/context/auth";
import DarkTheme from "~/media/dark.svg?jsx";
import LightTheme from "~/media/light.svg?jsx";
// import CartImg from "~/media/cart.svg?url";

export default component$(() => {
  const store = useStore({ theme: "light" }); //
  const changeTheme = $(() => {
    store.theme = store.theme === "dark" ? "light" : "dark";
  });
  const authState = useContext(AuthContext);
  const productStore = useContext(ProductStoreContext);

  return (
    <nav class="grid grid-cols-3 gap-3 place-self-end self-center pr-5">
      {store.theme === "dark" ? (
        <DarkTheme onClick$={changeTheme} />
      ) : (
        <LightTheme onClick$={changeTheme} />
      )}

      {authState.auth.loggedIn ? (
        <Link href="/cart">
          {/* <CartImg height="25" width="25" /> */}

          <div class="back self-center bg-[url(/src/media/cart.svg)] bg-left bg-no-repeat text-center text-xs">
            {productStore.cart.length}
          </div>
        </Link>
      ) : (
        ""
      )}
      {authState.auth.loggedIn ? (
        <Link href="/">Home</Link>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
});
