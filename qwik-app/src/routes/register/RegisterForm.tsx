import { component$ } from "@builder.io/qwik";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";

export default component$(() => {
  return (
    <form class="grid justify-center gap-1">
      <h1>Regiser</h1>
      <InputElement name="name" text="Name" type="text" />
      <InputElement name="email" text="Email" type="email" />
      <InputElement name="password" text="Password" type="password" />
      <InputElement name="confirm_password" text="Confirm Password" type="password" />
      <FormButton text="Register" />
    </form>
  );
});
