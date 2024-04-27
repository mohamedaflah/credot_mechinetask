import { Cart } from "./Cart";

export interface CartInitial {
  loading: boolean;
  err: boolean | string;
  cart: Cart[] | null;
  cartproducts: string[] | null;
}
