import { component$, Resource, useContext, useResource$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ProductCard from "~/components/ProductCard";
import { ProductStoreContext } from "~/context/product-store";
import { Product } from "~/types/types";
import { AuthContext } from "~/context/auth";

export default component$(() => {
  // const store = useStore<{ products: Product[] }>({ products: [] });
  const productStore = useContext(ProductStoreContext);
  const authState = useContext(AuthContext);
  const productsResource = useResource$<Product[]>(async () => {
    // return [];
    return productStore.products;
  });

  return (
    <Resource
      value={productsResource}
      onResolved={() => (
        <>
          <div class="grid auto-cols-max grid-cols-1 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
            {productStore.products.map((product) => (
              <ProductCard
                keyid={product.id}
                key={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                auth={authState.loggedIn}
                cart={product.cart}
              />
            ))}
          </div>
        </>
      )}
    />
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
