import { $, component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, server$, useNavigate } from "@builder.io/qwik-city";
import { AuthContext } from "~/context/auth";
import { ProductStoreContext } from "~/context/product-store";
import DarkTheme from "~/media/dark.svg?jsx";
import LightTheme from "~/media/light.svg?jsx";
import { getThemeBefore } from "~/routes/layout";
export const setThemeBefore = server$(async function (theme) {
  const { cookie } = this;
  if (theme == "light") {
    cookie.set("theme", "dark");
  } else {
    cookie.set("theme", "light");
  }
  return cookie.get("theme")?.value;
});
export default component$(() => {
  const prevTheme = getThemeBefore();
  const store = useSignal("light"); //

  useTask$(async () => {
    store.value = prevTheme.value || "light";
    // document.documentElement.className = prevTheme.value || "light";
  });

  const changeTheme = $(async () => {
    const themen = await setThemeBefore(store.value);
    store.value = themen || "light";
    document.documentElement.className = themen || "light";
    localStorage.setItem("theme", themen || "light");
  });
  const authState = useContext(AuthContext);
  const productStore = useContext(ProductStoreContext);

  console.log("from nav", authState.loggedIn);
  const nav = useNavigate();
  const handleLogout = $(() => {
    alert("here");
    localStorage.removeItem("authentication");
    authState.loggedIn = false;
    nav("/");
  });

  // console.log(authState);
  return (
    <nav class="grid grid-cols-4 gap-3 place-self-end self-center pr-5">
      {store.value === "dark" ? (
        <DarkTheme onClick$={changeTheme} />
      ) : (
        <LightTheme onClick$={changeTheme} />
      )}
      {authState.loggedIn ? (
        <Link href="/cart">
          {/* <CartImg height="25" width="25" /> */}

          <div class="back self-center bg-[url(/src/media/cart.svg)] bg-left bg-no-repeat text-center text-xs">
            {productStore.cart.length}
          </div>
        </Link>
      ) : (
        ""
      )}
      {authState.loggedIn ? (
        <>
          <Link href="/">Home</Link>
          <Link onClick$={handleLogout}>Logout</Link>
        </>
      ) : (
        <>
          <Link href="/login">Login</Link>
          <Link href="/register">Register</Link>
        </>
      )}
    </nav>
  );
});
