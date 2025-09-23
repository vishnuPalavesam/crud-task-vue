import { $, component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ProductStoreContext } from "~/context/product-store";
import cartImg from "~/media/cart.svg";
type componentProps = {
  name: string;
  image: string;
  price: number;
  cart?: boolean;
  auth: boolean;
  keyid: number;
};
export default component$<componentProps>(({ keyid, name, image, price, cart, auth }) => {
  const productStore = useContext(ProductStoreContext);

  const onclick = $(() => {
    const product = productStore.products.find((el) => el.id === keyid);
    const cart = productStore.cart.find((el) => el.id === keyid);
    if (product) {
      product.cart = !product.cart;
      if (cart) {
        productStore.cart = productStore.cart.filter((el) => el.id !== keyid);
      } else {
        const cartProduct = product;
        cartProduct.startquantity = 1;
        productStore.cart.push(cartProduct);
      }
    }
  });
  return (
    <>
      <div class="relative flex flex-col items-center rounded-lg bg-white p-2 shadow-md transition hover:shadow-lg dark:bg-gray-800">
        <img
          alt=""
          class="mb-3 h-40 w-full rounded-md object-cover transition-transform hover:scale-105"
          height="30"
          width="30"
          src={image}
        />
        {auth && cart ? (
          <img
            class="absolute top-4 right-4 rounded-full bg-green-100 p-2 shadow"
            src={cartImg}
            height="30"
            width="30"
            alt=""
          />
        ) : (
          ""
        )}
        <div class="grid w-full grid-cols-5 items-center gap-2">
          <div class="col-span-4">
            <h4 class="truncate text-lg font-semibold text-gray-800 dark:text-neutral-200">
              {name}
            </h4>
            <h5 class="mt-1 text-sm text-gray-500 dark:text-neutral-300">{`$ ${price}`}</h5>
          </div>
          {auth ? (
            <Link onClick$={onclick}>
              <img
                class="cursor-pointer rounded-full bg-green-50 p-2 transition hover:bg-green-200 dark:bg-neutral-400 dark:hover:bg-green-100"
                src={cartImg}
                height="30"
                width="30"
                alt=""
              />
            </Link>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
});
