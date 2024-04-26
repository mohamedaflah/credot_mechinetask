import { Product, Variant } from "./Product";

export interface ProductReducer {
  loading: boolean;
  err: boolean | string;
  products: Product[] | null;
  selectedProduct: Variant | null;
  varients: Variant[] | null;
}
