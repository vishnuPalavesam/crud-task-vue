import { Slot, component$ } from "@builder.io/qwik";
import Header from "~/components/Header";

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
    </>
  );
});
