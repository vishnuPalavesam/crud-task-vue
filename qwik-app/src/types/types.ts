import { FunctionComponent } from "@builder.io/qwik/jsx-runtime";

export interface Product {
  id: number;
  name: string;
  cart: boolean;
  image: string;
  price: number;
  quantity: number;
  startquantity: number;
}

export interface AuthContextType {
  auth: {
    userId?: string;
    loggedIn: boolean;
  };
}
