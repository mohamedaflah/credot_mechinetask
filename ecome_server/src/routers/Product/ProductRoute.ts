import { Router } from "express";
import { addNewProduct } from "../../controllers/Product/productAddController";
import { getAllProduct } from "../../controllers/Product/getAllProduct";
import { getAllVarients } from "../../controllers/Product/Varients/getAllVarient";
import { fetchSpecificProduct } from "../../controllers/Product/fetchSpecificProduct";
import { addNewVarient } from "../../controllers/Product/Varients/addnewVarient";
import { getProductAndVarient } from "../../controllers/Product/Varients/getProductAndVarient";

const productRouter = Router();

productRouter.route(`/product`).post(addNewProduct).get(getAllProduct);
productRouter.route(`/variants/:productId`).get(getAllVarients).post(addNewVarient);
productRouter.post(`/getoneproduct`, fetchSpecificProduct);
productRouter.get(`/product/:productId/:varientId`,getProductAndVarient)
export default productRouter;
