import { NextFunction, Request, Response } from "express";
import CartModel from "../../models/cart/CartModel";

export const updateCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // CART_MODEL
    const { userId, productId, qty, currentSotck } = req.body;
    console.log(req.body);

    const cart = await CartModel.findOne({ userId: userId });
    let message=""
    if (cart && cart.products) {
      cart.products = cart?.products.map((product) => {
        if (product?.productId == productId) {
          if (qty >= 1 && qty < currentSotck) {
            message="Cart updated"
            return {
              ...product,
              qty: qty,
            };
          } else {
            message="Maximum limit reached"
            return product;
          }
        } else {
          return product;
        }
      }) as any;
      await cart.save();
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
    res.status(200).json({
      status: true,
      message,
      cartProduct: productId,
      cartId: cart?._id,
      qty: qty,
      cart: cartData?.[0].products,
    });
  } catch (error) {
    next(error);
  }
};
