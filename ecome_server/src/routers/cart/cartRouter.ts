import { Router } from "express";
import { addToCartController } from "../../controllers/cart/addToCart";
import { getCartProducts } from "../../controllers/cart/getCartProducts";
import { deleteCart } from "../../controllers/cart/deleteCart";
import { updateCart } from "../../controllers/cart/updateCart";

const cartRouter = Router();

cartRouter
  .route("/cart")
  .post(addToCartController)
  .get(getCartProducts)
  .delete(deleteCart)
  .put(updateCart);

export default cartRouter;
