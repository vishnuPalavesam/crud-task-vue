import { $, component$ } from "@builder.io/qwik";
import { useNavigate } from "@builder.io/qwik-city";
import FormButton from "~/components/FormButton";
import InputElement from "~/components/InputElement";

export default component$(() => {
  const nav = useNavigate();

  const handleRegister = $(async (ev: SubmitEvent) => {
    ev.preventDefault();
    const formData = new FormData(ev.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const password_confirmation = formData.get("password_confirmation");

    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      // credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, password_confirmation }),
    });

    if (res.status === 201) {
      const data = await res.json();
      console.log(data);
      // localStorage.setItem("authentication", data.token);
      nav("/login");
    }
  });
  return (
    <form onSubmit$={handleRegister} class="grid justify-center gap-1" preventdefault:submit>
      <h1>Regiser</h1>
      <InputElement name="name" text="Name" type="text" />
      <InputElement name="email" text="Email" type="email" />
      <InputElement name="password" text="Password" type="password" />
      <InputElement name="password_confirmation" text="Confirm Password" type="password" />
      <FormButton text="Register" />
    </form>
  );
});
