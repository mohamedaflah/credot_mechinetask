import { Order } from "./Order";

export interface OrderInitial {
  loading: boolean;
  err: boolean | string;
  order: Order | null;
  orders: Order[] | null;
}
