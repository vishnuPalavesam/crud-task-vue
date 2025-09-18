import { Slot, component$ } from "@builder.io/qwik";

import Header from "~/components/Header";
export default component$(() => {
  return (
    <>
      <Header />
      <main class="grid w-full justify-center">
        <Slot />
      </main>
    </>
  );
});
