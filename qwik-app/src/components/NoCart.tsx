import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import ProductCard from "./ProductCard";
import { Product } from "~/types/types";

// type componentProps = {
//   products: {
//       name: string;
//       image: string;
//       price: number;
//       cart?: boolean;
//       auth: boolean;
//       keyid: number;
//       // startquantity: number;
//       id: number;
//   }[];
// };
// type Product = {
//   name: string;
//   image: string;
//   price: number;
//   cart?: boolean;
//   auth: boolean;
//   keyid: number;
//   id: number;
// };
export default component$<{ products: Product[] }>(({ products }) => {
  // export default component$<componentProps>(({ keyid, name, image, price, cart, auth }) => {
  return (
    <div class="grid max-h-1/2 grid-rows-2 items-center gap-10 text-center">
      <div class="nocart-text">
        No Items in the Cart. Go to
        <Link class="text-green-600" href="/">
          {" "}
          Home{" "}
        </Link>
      </div>
      <div class="grid grid-rows-none items-center gap-3">
        <h4 class="max-h-1/2 text-left">Recent Products</h4>
        <div class="grid grid-cols-4 gap-2">
          {products.map((product) => (
            <ProductCard
              keyid={product.id}
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              auth={true}
              cart={product.cart}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
