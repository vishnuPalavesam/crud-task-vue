import { component$ } from "@builder.io/qwik";
import RegisterForm from "./RegisterForm";
import RegisterContent from "./RegisterContent";

export default component$(() => {
  return (
    <div class="text-md grid min-h-[77vh] max-w-2/3 grid-cols-2 place-items-center items-center place-self-center">
      <RegisterContent />
      <RegisterForm />
    </div>
  );
});
