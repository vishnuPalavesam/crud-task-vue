import { Slot, component$ } from "@builder.io/qwik";
import { RequestHandler } from "@builder.io/qwik-city";
import Header from "~/components/Header";
// import { AuthContext } from "~/context/auth";

export const onRequest: RequestHandler = ({cookie}) => {


  console.log('qwik_auth_token',cookie.get('qwik_auth_token'));
  console.log('headers',cookie.headers());
}


export default component$(() => {
  // const auth = AuthContext;
  // console(auth);
  // useContextProvider(AuthContext, auth); // ✅ Provide context here

  return (
    <>
      <Header />
      <main class="grid w-full justify-center">
        <Slot />
      </main>
    </>
  );
});
