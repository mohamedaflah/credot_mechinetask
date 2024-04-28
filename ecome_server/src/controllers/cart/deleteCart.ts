import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const deleteCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // CART_MODEL
    const { userId, productId } = req.query;
    console.log(req.query);
    const cart = await CartModel.findOne({ userId: userId });
console.log("REchd");

    if (cart && cart.products) {
      console.log("()", cart.products.length);
      cart.products = cart.products.filter(
        (value) => String(value?.productId) !== productId
      ) as any;
      await cart.save();
      console.log("Initial products:", "initialLength", "Final products:");
    }

    const cartData = await CartModel.aggregate([
      { $match: { userId: userId } },
      { $unwind: "$products" },
      {
        $lookup: {
          from: "products",
          let: { productId: "$products.productId" },
          pipeline: [
            { $unwind: "$variants" },
            { $match: { $expr: { $eq: ["$variants._id", "$$productId"] } } },
            {
              $lookup: {
                from: "brands", // Assumes your brands are stored in a collection named 'brands'
                localField: "brand",
                foreignField: "_id",
                as: "brandDetails",
              },
            },
            { $unwind: "$brandDetails" }, // Unwind the brand details if you're sure every product has one brand
            {
              $project: {
                productName: 1,
                category: 1,
                brand: "$brandDetails",
                slug: 1,
                variant: "$variants",
              },
            },
          ],
          as: "productDetails",
        },
      },
      {
        $unwind: "$productDetails", // Optional depending on your structure needs
      },
      {
        $set: {
          "productDetails.brand": {
            $concat: [
              "$productDetails.brand.title",
              "[(*)]",
              "$productDetails.brand.image",
            ],
          },
        },
      },
      {
        $group: {
          _id: "$_id",
          userId: { $first: "$userId" },
          products: {
            $push: {
              qty: "$products.qty",
              productDetails: "$productDetails",
            },
          },
        },
      },
    ]);

    res
      .status(200)
      .json({
        status: true,
        message: "Succesfull",
        cartProduct: productId,
        cart: cartData[0].products ? cartData[0].products : null,
      });
  } catch (error) {
    next(error);
  }
};
