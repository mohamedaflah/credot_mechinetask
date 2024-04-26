import { Product, Variant } from "./Product";

export interface ProductReducer {
  loading: boolean;
  err: boolean | string;
  products: Product[] | null;
  selectedProduct: Product | null;
  varients: Variant[] | null;
  selectedVarient: Variant | null;
  varientLoading: boolean;
}
