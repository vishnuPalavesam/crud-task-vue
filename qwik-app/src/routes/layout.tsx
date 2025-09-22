import { Slot, component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/Header";
import type { RequestHandler } from "@builder.io/qwik-city";

// middleware
export const onRequest: RequestHandler = async ({ next, redirect, cookie, url, sharedMap }) => {
  const route = url.pathname.replaceAll("/", "");
  const authRoutes = ["login", "register"];
  if (cookie.get("authentication")) {
    if (!sharedMap.get("authentication")) {
      sharedMap.set("authentication", cookie.get("authentication"));
    }
    if (!authRoutes.includes(route)) await next();
    else throw redirect(308, "/");
  } else {
    if (!authRoutes.includes(route)) throw redirect(308, "/login");
  }
};

export const useThemeBefore = routeLoader$((cookie) => {
  if (!cookie.cookie.get("theme")) {
    cookie.cookie.set("theme", "light");
  }
  return cookie.cookie.get("theme")?.value;
});

export default component$(() => {
  return (
    <>
      <Header />
      <main class="mt-10 grid w-full justify-center dark:bg-gray-900">
        <Slot />
      </main>
    </>
  );
});
