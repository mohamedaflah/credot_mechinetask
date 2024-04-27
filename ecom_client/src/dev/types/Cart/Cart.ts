import { Variant } from "../Product/Product";

// Interface for the cart
export interface CartProduct {
  productName: string;
  tag?: string;
  category?: string;
  brand?: string;
  slug?: string;
  _id?: string;
  variant?: Variant;
  createdAt?: Date;
}
export interface Cart {
  qty: number;
  productDetails: CartProduct;
}

// "cart": [
//   {
//       "qty": 1,
//       "productDetails": {
//           "_id": "662b8435ecc8f51e882f1c38",
//           "productName": "One plus 11",
//           "category": "Gaming Phone Phone",
//           "brand": "One plus[(*)]https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127762/lg_ubceer.webp",
//           "variant": {
//               "description": "Good and quality mobile {format(String(product.createdAt),\"PPP\")}{format(String(product.createdAt),\"PPP\")}",
//               "images": [
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127922/on6_husuny.jpg",
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127923/on5_acmypt.jpg",
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127924/one4_dnkbhv.jpg",
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127924/on3_azewcy.webp",
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127925/onePlus2_ucgudh.png",
//                   "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714127925/onePlus1_gimfqt.jpg"
//               ],
//               "price": 43000,
//               "stock": 7,
//               "color": "#4dc2ba",
//               "memory": "512 GB",
//               "status": "publish",
//               "specifications": [
//                   "Good",
//                   "quality",
//                   "Superb",
//                   "completed"
//               ],
//               "modelNumber": "12389743",
//               "releasedDate": "2024-03-31T18:30:00.000Z",
//               "_id": "662b8435ecc8f51e882f1c39"
//           }
//       }
//   }
// ]
