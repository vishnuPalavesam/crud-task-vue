import { $, component$, useContext, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, server$, useNavigate } from "@builder.io/qwik-city";
import { AuthContext } from "~/context/auth";
import { ProductStoreContext } from "~/context/product-store";
import DarkTheme from "~/media/dark.svg?jsx";
import LightTheme from "~/media/light.svg?jsx";
import { useThemeBefore } from "~/routes/layout";
export const setThemeBefore = server$(async function (theme) {
  const { cookie } = this;
  if (theme == "light") {
    cookie.set("theme", "dark");
  } else {
    cookie.set("theme", "light");
  }
  return cookie.get("theme")?.value;
});

export const logoutUser = server$(async function () {
  this.cookie.delete("authentication");
  this.sharedMap.delete("authentication");

  return {
    success: true,
  };
});
export default component$(() => {
  const prevTheme = useThemeBefore();
  const store = useSignal("light"); //

  const authState = useContext(AuthContext);
  useTask$(async () => {
    store.value = prevTheme.value || "light";
  });

  const changeTheme = $(async () => {
    const theme = await setThemeBefore(store.value);
    store.value = theme || "light";
    document.documentElement.className = theme || "light";
    localStorage.setItem("theme", theme || "light");
  });
  const productStore = useContext(ProductStoreContext);

  const nav = useNavigate();
  const handleLogout = $(async () => {
    const user = await logoutUser();
    if (user.success === true) {
      authState.loggedIn = false;
      nav("/login");
    }
  });

  return (
    <nav class="grid grid-cols-4 gap-3 place-self-end self-center pr-5">
      {store.value === "dark" ? (
        <div class="max-w-fit rounded-xl active:bg-neutral-500 active:backdrop-blur-xs">
          <DarkTheme onClick$={changeTheme} />
        </div>
      ) : (
        <div class="rounded-xl active:backdrop-blur-xs">
          <LightTheme onClick$={changeTheme} />
        </div>
      )}
      {authState.loggedIn ? (
        <Link href="/cart">
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
