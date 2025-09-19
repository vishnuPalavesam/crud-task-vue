/**
 * WHAT IS THIS FILE?
 *
 * SSR entry point, in all cases the application is rendered outside the browser, this
 * entry point will be the common one.
 *
 * - Server (express, cloudflare...)
 * - npm run start
 * - npm run preview
 * - npm run build
 *
 */
import { renderToStream, type RenderToStreamOptions } from "@builder.io/qwik/server";

import Root from "./root";
// import { routeLoader$ } from "@builder.io/qwik-city";
// import { server$ } from "@builder.io/qwik-city";
// export const getTheme = server$(function () {
//   const { cookie } = this;
//   return cookie.get("theme")?.value;
// });
export default function (opts: RenderToStreamOptions) {
  // const selectedTheme = useSignal("dark");
  // const changeTheme = routeLoader$(async (cookie) => {
  //   console.log(cookie);
  //   return true;
  //   // return requestEvent.cookie("theeme");
  // });
  // changeTheme();
  const theme = "light";
  return renderToStream(<Root />, {
    ...opts,
    // Use container attributes to set attributes on the html tag.
    containerAttributes: {
      "data-theme": theme,
      lang: "en-us",
      ...opts.containerAttributes,
    },
    serverData: {
      ...opts.serverData,
    },
  });
}
