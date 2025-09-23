import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/media/logo.svg?jsx";

import { Link } from "@builder.io/qwik-city";
import NavBar from "./NavBar";

export default component$(() => {

  return (
    <header class="grid grid-cols-3 content-center items-center justify-center gap-2 py-2 dark:bg-gray-900 dark:text-white">
      <Link href="/" class="self-center sm:col-span-2 md:col-span-2 lg:col-span-2">
        <ImgLogo class="h-[62px]" />
      </Link>
      <NavBar />
    </header>
  );
});
