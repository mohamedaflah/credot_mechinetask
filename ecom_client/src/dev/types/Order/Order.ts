import { Variant } from "../Product/Product";

export interface Order {
    _id: string;
    userId: string;
    paymentMode: "online" | "cod";
    status: "pending" | "shipped" | "delivered";
    totalAmount: number;
    address: {
      place: string;
      street: string;
      state: string;
      pincode: string;
      phone: string;
      email: string;
    };
    products: Variant[];
  }