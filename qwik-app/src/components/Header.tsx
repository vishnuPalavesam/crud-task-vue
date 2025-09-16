import { component$, useStore } from "@builder.io/qwik";
import ImgLogo from "~/media/logo.svg?jsx";
import DarkTheme from "~/media/dark.svg?jsx";
import LightTheme from "~/media/light.svg?jsx";

export default component$(() => {
  const store = useStore({ theme: "" });
  function changeTheme() {
    // store.theme === "dark" ? (store.theme = "dark") : (store.theme = "light");
  }
  // const store = useStore({ theme: document.documentElement.getAttribute('data-theme') || '' });

  // useVisibleTask$(() => {
  //   store.theme = document.documentElement.getAttribute('data-theme') || ''
  // })

  //  const useTheme = routeLoader$(({ cookie }) => {
  //     const theme = cookie.get("theme")?.value || "light";
  //     return theme;
  //   });
  // const isDark = document.documentElement.getAttribute('data-theme');
  return (
    <>
      <header class="grid grid-cols-3 content-center items-center justify-center py-2">
        <ImgLogo class="col-span-2 h-[62px] self-center" />
        <nav class="grid grid-cols-3 gap-3 place-self-end self-center">
          {store.theme === "dark" ? (
            <DarkTheme onClick$={changeTheme()} />
          ) : (
            <LightTheme onClick$={changeTheme()} />
          )}
          <a href="/login">Login</a>
          <a href="/register">Regiser</a>
        </nav>
      </header>
    </>
  );
});
