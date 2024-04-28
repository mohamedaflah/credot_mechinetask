export interface Product {
  productName: string;
  tag?: string;
  category?: string;
  brand?: string;
  slug?: string;
  _id?: string;
  variants?: Variant[];
  createdAt?: Date;
  updatedAt?: Date;
  deleteStatus?: boolean;
}

export interface Variant {
  description: string;
  _id?: string;
  images: string[];
  price: number;
  discount?: number;
  stock: number;
  sold?: number;
  color: string;
  memory: string;
  status: "publish" | "unpublish";
  specifications: string[];
  modelNumber: string;
  releasedDate: Date;
  category?: string;
}
