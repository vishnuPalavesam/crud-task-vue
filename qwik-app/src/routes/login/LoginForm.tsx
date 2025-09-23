import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { Form, useNavigate } from "@builder.io/qwik-city";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";
import { useloginAction } from ".";
import { AuthContext } from "~/context/auth";

const TestComponent = component$(() => {
  return <h1>Test</h1>;
});

export default component$(() => {
  const authState = useContext(AuthContext);

  const nav = useNavigate();
  const action = useloginAction();
  useTask$(({ track }) => {
    track(() => action.value);
    if (action.value?.success) {
      authState.loggedIn = true;
      nav("/");
    }
  });
  return (
    <Form action={action} class="grid justify-center gap-2">
      <h1>Login</h1>
      <InputElement name="email" text="Email" type="email" />
      <InputElement name="password" text="Password" type="password" />
      <FormButton text="Login" />
    </Form>
  );
});

export { TestComponent };
