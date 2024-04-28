import { Router } from "express";
import { addNewProduct } from "../../controllers/Product/productAddController";
import { getAllProduct } from "../../controllers/Product/getAllProduct";
import { getAllVarients } from "../../controllers/Product/Varients/getAllVarient";
import { fetchSpecificProduct } from "../../controllers/Product/fetchSpecificProduct";
import { addNewVarient } from "../../controllers/Product/Varients/addnewVarient";
import { getProductAndVarient } from "../../controllers/Product/Varients/getProductAndVarient";
import { updateProduct } from "../../controllers/Product/updateProduct";
import { updateVarient } from "../../controllers/Product/Varients/updateVarient";

const productRouter = Router();

productRouter.route(`/product`).post(addNewProduct).get(getAllProduct).patch(updateProduct);
productRouter.route(`/variants/:productId`).get(getAllVarients).post(addNewVarient);
productRouter.post(`/getoneproduct`, fetchSpecificProduct);
productRouter.get(`/product/:productId/:varientId`,getProductAndVarient)
productRouter.put(`/product/:productId/:varientId`,updateVarient)
export default productRouter;
