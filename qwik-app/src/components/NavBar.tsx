import { $, component$, useContext, useSignal, useStore } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import { AuthContext } from "~/context/auth";
import DarkTheme from "~/media/dark.svg?jsx";
import LightTheme from "~/media/light.svg?jsx";

export default component$(() => {
  const store = useStore({ theme: "light" }); //
  const changeTheme = $(() => {
    store.theme = store.theme === "dark" ? "light" : "dark";
  });

  const auth = useSignal(false); //
  console.log(auth.value);
  return (
    <nav class="grid grid-cols-3 gap-3 place-self-end self-center pr-5">
      {store.theme === "dark" ? (
        <DarkTheme onClick$={changeTheme} />
      ) : (
        <LightTheme onClick$={changeTheme} />
      )}

      {auth.value ? (
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
