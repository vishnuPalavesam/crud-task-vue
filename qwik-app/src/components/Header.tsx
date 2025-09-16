import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/media/logo.svg?jsx";

// const isDark =

export default component$(() => {
  return (
    <>
      <header class="grid grid-cols-3 content-center items-center justify-center py-2">
        <ImgLogo class="col-span-2 h-[62px] self-center" />
        <nav class="grid grid-cols-3 gap-3 place-self-end self-center">
          <a href="/login">Login</a>
          <a href="/register">Regiser</a>
        </nav>
      </header>
    </>
  );
});
