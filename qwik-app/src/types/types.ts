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
  userId?: string;
  loggedIn: boolean;
}
