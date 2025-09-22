import { $, component$, PropFunction } from "@builder.io/qwik";
import { Product } from "~/types/types";

interface componentProps extends Omit<Product, "id"> {
  keyid: number;
  element: { quantity: number; startquantity: number };
  onRemove$: PropFunction<(id: number) => void>;
}
export default component$<componentProps>(
  ({ onRemove$, element, name, image, price, keyid, quantity, startquantity }) => {
    const decrease = $(() => {
      element.startquantity--;
    });

    const increase = $(() => {
      element.startquantity++;
    });

    return (
      <div data-key={keyid} class="cart-item flex items-center gap-6 rounded-lg p-4 shadow">
        <img
          alt=""
          src={image}
          class="h-24 w-24 rounded-lg border object-cover"
          height="100"
          width="100"
        />
        <div class="flex-1">
          <h4 class="text-lg font-semibold text-gray-400">{name}</h4>
          <p class="text-gray-500">
            Price: <span class="font-bold text-gray-400">{`$ ${price}`}</span>
          </p>
          <div class="mt-2 flex items-center gap-2">
            <button
              onClick$={decrease}
              disabled={startquantity === 1}
              class="rounded bg-gray-300 px-2 py-1 hover:bg-gray-400"
            >
              -
            </button>
            <span class="rounded border bg-white dark:bg-neutral-300 px-3 py-1 text-gray-700">{startquantity}</span>
            <button
              onClick$={increase}
              disabled={quantity === startquantity}
              class="rounded bg-gray-300 px-2 py-1 hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>
        <button class="rounded-md bg-red-900 p-1.5 text-white" onClick$={() => onRemove$(keyid)}>
          Remove
        </button>
      </div>
    );
  },
);
