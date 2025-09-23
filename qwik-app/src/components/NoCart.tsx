import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import ProductCard from "./ProductCard";
import { Product } from "~/types/types";

export default component$<{ products: Product[] }>(({ products }) => {
  return (
    <div class="grid min-h-[94vh] grid-rows-2 items-center text-center">
      <div class="min-h-[40vh] content-center self-center rounded-lg border-1 border-white text-center text-xl dark:text-white">
        No Items in the Cart. Go to
        <Link class="text-green-600" href="/">
          {" "}
          Home{" "}
        </Link>
      </div>
      <div class="grid grid-rows-none items-center gap-3">
        <h4 class="max-h-1/2 text-left dark:text-neutral-200">Recent Products</h4>
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
