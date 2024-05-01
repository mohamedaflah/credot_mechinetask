import { AdminOrder } from "./Order";
import { UserOrder } from "./userOrder";

export interface OrderInitial {
  loading: boolean;
  err: boolean | string;
  userorder: UserOrder[] | null;
  orders: AdminOrder[] | null;
}
