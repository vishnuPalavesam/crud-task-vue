import { $, component$, useSignal } from "@builder.io/qwik";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";
// import { AuthContext } from "~/context/auth";

const TestComponent = component$(() => {
  return <h1>Test</h1>;
});

export default component$(() => {
  // const auth = useContext(AuthContext); // ✅ Access shared login state
  const auth = useSignal(false);

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

      localStorage.setItem("authentication", data.token);
      auth.value = true;
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
