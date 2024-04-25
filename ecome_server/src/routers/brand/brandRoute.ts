import { Router } from "express";
import { addBrand } from "../../controllers/brand/addBrand";
import { updateBrand } from "../../controllers/brand/updateBrand";
import { getAllBrands } from "../../controllers/brand/getAllBrand";

const brandRouter = Router();

brandRouter.route("/brand").post(addBrand).put(updateBrand).get(getAllBrands);

export default brandRouter;
