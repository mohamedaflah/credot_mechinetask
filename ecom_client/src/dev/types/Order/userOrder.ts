// [
//     {
//         "_id": "662cf89a82417528a26f94e7",
//         "userId": "662a3db50d09d400ed19e108",
//         "paymentMode": "cod",
//         "status": "pending",
//         "totalAmount": 84000,
//         "address": {
//             "place": "Tgi",
//             "street": "Tazhechina",
//             "state": "Kerala",
//             "pincode": "678904",
//             "phone": "9446100107",
//             "email": "koolathafla@gmail.com"
//         },
//         "products": [
//             {
//                 "productId": "662be62b1fd207ac307e3f90",
//                 "qty": 1,
//                 "price": 34000,
//                 "_id": "662cf89a82417528a26f94e8",
//                 "productDetails": {
//                     "_id": "662be62b1fd207ac307e3f8f",
//                     "productName": "Redmin not 13 pro",
//                     "category": "Flagship Phone Phone",
//                     "brand": "Realme[(*)]https://res.cloudinary.com/dzaoju6lr/image/upload/v1714152344/realme_z2wjhy.jpg",
//                     "variant": {
//                         "description": "*The device has been tested in a controlled environment and certified to be resistant to splash, water, and dust in specific laboratory conditions with the classification IP54 under IEC 60529: 1989+A1:1999+A2:2013. *Splash-proof, waterproof and dustproof features may be degraded due to daily use loss.",
//                         "images": [
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714153000/TRASERA1_k4b7y5.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714153001/89cae34bbfee854ecde084774029f35a_j9zvx0.png",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714153002/1_61b03799-f9c1-4003-9361-6668f5e61901_hh5ivu.webp",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714153003/4c40a95d0958219c43c4823834faffc9_eqbnpa.png",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714153004/images_uqoo5e.jpg"
//                         ],
//                         "price": 34000,
//                         "stock": 23,
//                         "color": "#a1caf6",
//                         "memory": "256 GB",
//                         "status": "publish",
//                         "specifications": [
//                             "good",
//                             "set",
//                             "superb",
//                             "good",
//                             "very good"
//                         ],
//                         "modelNumber": "1234",
//                         "releasedDate": "2024-03-31T18:30:00.000Z",
//                         "_id": "662be62b1fd207ac307e3f90"
//                     }
//                 }
//             },
//             {
//                 "productId": "662cbb36bf89d4c9cdca7772",
//                 "qty": 1,
//                 "price": 50000,
//                 "_id": "662cf89a82417528a26f94e9",
//                 "productDetails": {
//                     "_id": "662cbb36bf89d4c9cdca7771",
//                     "productName": "Pixel 6 pro",
//                     "category": "Flagship Phone Phone",
//                     "brand": "Pixel[(*)]https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207416/google-pixel-log-brand-portable-260nw-2377054495_bmznz5.webp",
//                     "variant": {
//                         "description": "value?.productIdaewfGoogle has once again reclaimed its Android photography crown and goes head-to-head with Apple's best. The Pixel 6 Pro is a powerful and capable phone and Tensor, while somewhat moderate in benchmarks, has some seriously excellent applications.14 Mar 2023",
//                         "images": [
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207539/2ewds_c1pgxl.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207540/324_vmlc1g.avif",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207541/32_jfunhq.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207541/asd_lpzq5x.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207542/4_x0sj0j.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207543/ds_rlfgcd.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207543/332_kid4jm.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207544/Untitled_gyxahp.jpg",
//                             "https://res.cloudinary.com/dzaoju6lr/image/upload/v1714207544/613exuiA_pL._AC_SX466__eqtzhy.jpg"
//                         ],
//                         "price": 50000,
//                         "stock": 4,
//                         "color": "#f0f0d8",
//                         "memory": "128 GB",
//                         "status": "publish",
//                         "specifications": [
//                             "Good",
//                             "superb"
//                         ],
//                         "modelNumber": "124523",
//                         "releasedDate": "2023-08-13T18:30:00.000Z",
//                         "_id": "662cbb36bf89d4c9cdca7772"
//                     }
//                 }
//             }
//         ]
//     }
// ]

import { Variant } from "../Product/Product";

export interface UserOrder {
  _id?: string;
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
  products: UserOrderSub[];
  createdAt?: Date;
  updatedAt?: Date;
}
export interface UserOrderSub {
  productId: string;
  qty: number;
  price: number;
  _id: string;
  productDetails: UserOrderProductDetails;
}

export interface UserOrderProductDetails {
  _id: string;
  productName: string;
  category: string;
  brand: string;
  variant: Variant;
}
