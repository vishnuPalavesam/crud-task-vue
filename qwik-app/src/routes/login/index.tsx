import { component$ } from "@builder.io/qwik";
import LoginForm from "./LoginForm";
import LoginContent from "./LoginContent";

export default component$(() => {
  return (
    // <div class="text-md grid min-h-[70vh] grid-cols-2 items-center">
    <div class="text-md grid min-h-[77vh] max-w-2/3 grid-cols-2 place-items-center items-center place-self-center">
      <LoginContent />
      <LoginForm />
    </div>
  );
});
