import { Router } from "express";
import { addNewProduct } from "../../controllers/Product/productAddController";
import { getAllProduct } from "../../controllers/Product/getAllProduct";

const productRouter = Router();

productRouter.route(`/product`).post(addNewProduct).get(getAllProduct)

export default productRouter