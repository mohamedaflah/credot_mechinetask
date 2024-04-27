import mongoose from "mongoose";
import OrderModel from "../../models/Orders/OrderModel";

export const getOrdersByUserId = async (userId: string) => {
  try {
    const orders = await OrderModel.aggregate([
      {
        $match: { userId:new mongoose.Types.ObjectId(userId) },
      },
      {
        $lookup: {
          from: "products", // Assuming your products collection name is "products"
          localField: "products.productId",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $project: {
          _id: 1,
          userId: 1,
          paymentMode: 1,
          status: 1,
          totalAmount: 1,
          address: 1,
          products: {
            $map: {
              input: "$products",
              as: "product",
              in: {
                productId: "$$product.productId",
                qty: "$$product.qty",
                price: "$$product.price",
                productDetails: {
                  $arrayElemAt: [
                    {
                      $filter: {
                        input: "$productDetails",
                        cond: { $eq: ["$$this._id", "$$product.productId"] },
                      },
                    },
                    0,
                  ],
                },
              },
            },
          },
        },
      },
    ]);

    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
