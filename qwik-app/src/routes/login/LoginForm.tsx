import { component$, useContext, useTask$ } from "@builder.io/qwik";
import { Form, useNavigate } from "@builder.io/qwik-city";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";
import { useloginAction } from ".";
import { AuthContext } from "~/context/auth";
// import { useLoginServer } from ".";

const TestComponent = component$(() => {
  return <h1>Test</h1>;
});

export default component$(() => {
  const authState = useContext(AuthContext);
  // const nav = useNavigate();

  // const handleLogin = $(async (ev: SubmitEvent) => {
  //   ev.preventDefault();
  //   const formData = new FormData(ev.target as HTMLFormElement);
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const res = await fetch("/api/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password }),
  //   });
  //   if (res.status === 200) {
  //     const data = await res.json();
  //     localStorage.setItem("authentication", data.token);
  //     authState.loggedIn = true;
  //     authState.userId = data.userId;
  //     nav("/");
  //   }
  // });

  // const action = useLoginServer();
  // useTask$(({ track }) => {
  //   track(() => action.value);
  //   if (action.value?.success) {
  //     authState.loggedIn = true;
  //     authState.userId = action.value.userId;
  //     nav("/");
  //   }
  // });

  // return (
  //   <form preventdefault:submit class="grid justify-center gap-1" onSubmit$={handleLogin}>
  //     <h1>Login</h1>
  //     <InputElement name="email" text="Email" type="email" />
  //     <InputElement name="password" text="Password" type="password" />
  //     <FormButton text="Login" />
  //   </form>
  // );
  // return cookie.get("authentication") || "";
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
