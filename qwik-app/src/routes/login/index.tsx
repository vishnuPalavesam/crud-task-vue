import { component$ } from "@builder.io/qwik";
import LoginForm from "./LoginForm";
import LoginContent from "./LoginContent";
import { routeAction$ } from "@builder.io/qwik-city";
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
  return (
    <div class="text-md grid min-h-[77vh] max-w-2/3 grid-cols-2 place-items-center items-center place-self-center">
      <LoginContent />
      <LoginForm />
    </div>
  );
});
