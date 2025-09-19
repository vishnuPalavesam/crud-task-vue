import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/Header";
export const getThemeBefore = routeLoader$((cookie) => {
  if (!cookie.cookie.get("theme")) {
    cookie.cookie.set("theme", "light");
  }
  return cookie.cookie.get("theme")?.value;
});

export default component$(() => {
  return (
    <>
      <Header />
      <main class="grid w-full justify-center dark:bg-gray-900 mt-10">
        <Slot />
      </main>
    </>
  );
});

