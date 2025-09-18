import { $, component$, useContext, useVisibleTask$ } from "@builder.io/qwik";
import CartItem from "~/components/CartItem";
import NoCart from "~/components/NoCart";
import { ProductStoreContext } from "~/context/product-store";
import { AuthContext } from "~/context/auth";
import { useNavigate } from "@builder.io/qwik-city";
// import { ProductStoreContext } from "~/context/product-strore";
// import { Product } from "~/types/types";

export default component$(() => {
  const authState = useContext(AuthContext);
  const nav = useNavigate();
  const productStore = useContext(ProductStoreContext);

  useVisibleTask$(() => {
    if (!authState.auth.loggedIn) {
      nav("/login");
    }
  });

  const handleRemove = $((id: number) => {
    const product = productStore.products.find((el) => el.id === id);
    if (product) product.cart = false;
    productStore.cart = productStore.cart.filter((el) => el.id !== id);
    return true;
  });

  const cart = productStore.cart;
  return (
    <>
      {cart.length > 0 ? (
        <div class="grid w-full min-w-[76vw] grid-cols-2">
          <div class="grid">
            {cart.map((el) => (
              <CartItem
                key={el.id}
                name={el.name}
                image={el.image}
                quantity={el.quantity}
                cart={el.cart}
                price={el.price}
                keyid={el.id}
                element={el}
                startquantity={el.startquantity}
                onRemove$={handleRemove}
              />
            ))}
          </div>
          <TotalView />
        </div>
      ) : (
        <NoCart products={productStore.recents} />
      )}
    </>
  );
  // return (
  //   <>
  //     <div>Here</div>
  //   </>
  // );
});

const TotalView = component$(() => {
  const productStore = useContext(ProductStoreContext);
  const cart = productStore.cart;
  return (
    <div class="cart-total min-w-23vw w-full rounded-lg bg-white p-6 shadow">
      <h3 class="min-w-23vw mb-4 text-xl font-bold text-gray-800">Total Price</h3>
      <p class="min-w-23vw text-2xl font-semibold text-green-600">
        {"$ " +
          cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)}
      </p>
    </div>
  );
});
