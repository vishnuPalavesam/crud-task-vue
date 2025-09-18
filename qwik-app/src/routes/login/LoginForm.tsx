import { $, component$, useContext } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";
import { AuthContext } from "~/context/auth";

const TestComponent = component$(() => {
  return <h1>Test</h1>;
});

export default component$(() => {
  const authState = useContext(AuthContext);
  const nav = useNavigate();
  const handleLogin = $(async (ev: SubmitEvent) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      // credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.status === 200) {
      const data = await res.json();
      // console.log(data.token);
      localStorage.setItem("authentication", data.token);
      authState.auth.loggedIn = true;
      authState.auth.userId = data.userId;
      nav("/");
    }
  });

  return (
    <form preventdefault:submit class="grid justify-center gap-1" onSubmit$={handleLogin}>
      <h1>Login</h1>
      <InputElement name="email" text="Email" type="email" />
      <InputElement name="password" text="Password" type="password" />
      <FormButton text="Login" />
    </form>
  );
});

export { TestComponent };
