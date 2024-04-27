import { Router } from "express";
import { createNewOrder } from "../../controllers/Order/createOrderController";
import { getAllOrdersForAdmin } from "../../controllers/Order/getAllOrdersforAdmin";
import { updateOrder } from "../../controllers/Order/updateOrder";

const orderRoute = Router();

orderRoute
  .route("/order")
  .post(createNewOrder)
  .get(getAllOrdersForAdmin)
  .patch(updateOrder);

export default orderRoute;
