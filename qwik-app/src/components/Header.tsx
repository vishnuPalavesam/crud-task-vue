import { component$ } from "@builder.io/qwik";
import ImgLogo from "~/media/logo.svg?jsx";

// import { AuthContext } from "~/context/auth";
import { Link } from "@builder.io/qwik-city";
import NavBar from "./NavBar";

export default component$(() => {
  // const auth = useContext(AuthContext); //

  return (
    <header class="grid grid-cols-3 gap-2 content-center items-center justify-center py-2">
      <Link href="/" class="lg:col-span-2 md:col-span-2 sm:col-span-2  self-center">
        <ImgLogo class="h-[62px]" />
      </Link>
      <NavBar />
    </header>
  );
});
