import { Brand } from "./Brand";

export interface BrandInitialState {
  loading: boolean;
  brands: Brand[] | null;
  err: boolean | string;
  brand?: Brand | null;
}
