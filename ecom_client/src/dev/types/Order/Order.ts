import { Variant } from "../Product/Product";
import { User } from "../User/user.type";

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
  createdAt?: Date;
  updatedAt?: Date;
}


export interface AdminOrder {
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
  products: {
    qty: number;
    price: number;
    _id: string;
    productDetails: AdminVariant;
  }[];
  createdAt?: Date;
  updatedAt?: Date;
  userDetails:User
}

export interface AdminVariant {
  _id: string;
  productName: string;
  category: string;
  brand: string;
  variant: {
    description: string;
    images: string[];
    price: number;
    stock: number;
    color: string;
    memory: string;
    status: "publish" | "unpublish";
    specifications: string[];
    modelNumber: string;
    releasedDate: Date;
  };
}