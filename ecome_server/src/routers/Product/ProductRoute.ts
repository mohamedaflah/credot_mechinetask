import { Router } from "express";
import { addNewProduct } from "../../controllers/Product/productAddController";
import { getAllProduct } from "../../controllers/Product/getAllProduct";
import { getAllVarients } from "../../controllers/Product/Varients/getAllVarient";

const productRouter = Router();

productRouter.route(`/product`).post(addNewProduct).get(getAllProduct);
productRouter.route(`/variants/:productId`).get(getAllVarients);
export default productRouter;
