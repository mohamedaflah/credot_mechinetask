import axios from "axios";

export const CustomAxios = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  withCredentials: true,
});
export const BrandAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/v1/brand`,
  withCredentials: true,
});
export const ProductAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/v1/product`,
  withCredentials: true,
});

export const CartAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/v1/cart`,
  withCredentials: true,
});

export const OrderAxios = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}api/v1/order`,
  withCredentials: true,
});
