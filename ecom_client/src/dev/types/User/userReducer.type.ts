import { User } from "./user.type";

export interface UserReducerInitial {
  loading: boolean;
  err: boolean | string;
  user: User | null;
  role: "user" | "admin" | null;
}
