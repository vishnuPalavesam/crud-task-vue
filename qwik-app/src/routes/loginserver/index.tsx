import { component$, useTask$ } from "@builder.io/qwik";
import { Form, routeAction$, useNavigate } from "@builder.io/qwik-city";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";

export const useloginAction = routeAction$(async (data, requestEvent) => {
  const email = data.email;
  const password = data.password;
  const res = await fetch("http://127.0.0.1:8000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const dataJSON = await res.json();
  if (res.status === 200 && dataJSON.token) {

    requestEvent.cookie.set("authentication", dataJSON.token, {
      path: "/",
      httpOnly: true,
      secure: true,
    });

    return {
      success: true,
      userId: dataJSON.userId,
    };
  }
  return {
    success: false,
    userId: -1,
  };
});
export default component$(() => {
  const nav = useNavigate();
  const action = useloginAction();
  useTask$(({ track }) => {
    track(() => action.value);
    if (action.value?.success) {
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
