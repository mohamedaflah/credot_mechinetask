import { Variant } from "../Product/Product";
import { User } from "../User/user.type";

export interface Cart {
  userId: string;
  user: User;
  products: Variant[];
}
