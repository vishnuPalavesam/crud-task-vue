import { Product } from "~/types/types";
import { createContextId } from "@builder.io/qwik";

export const ProductStoreContext = createContextId<{ products: Product[]; cart: Product[], recents:Product[]}>(
  "product-store",
);
