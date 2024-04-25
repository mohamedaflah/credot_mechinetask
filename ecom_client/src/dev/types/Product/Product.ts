export interface Product {
  productName: string;
  tag: string;
  category: string;
  brand: string;
  slug: string;
  _id: string;
  variants: Variant[];
}

export interface Variant {
  description: string;
  _id: string;
  images: string[];
  price: number;
  discount: number;
  stock: number;
  sold: number;
  color: string;
  memory: string;
  status: "publish" | "unpublish";
}
