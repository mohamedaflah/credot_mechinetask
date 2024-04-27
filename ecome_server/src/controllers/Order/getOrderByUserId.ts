import mongoose from "mongoose";
import OrderModel from "../../models/Orders/OrderModel";

export const getOrdersByUserId = async (userId: string) => {
  try {
    const orders = await OrderModel.aggregate([
      {
        $match: { userId: new mongoose.Types.ObjectId(userId) }, // Match orders by userId
      },
      {
        $unwind: "$products", // Deconstruct the products array
      },
      {
        $lookup: {
          from: "products", // Lookup in the products collection
          let: { productId: "$products.productId" }, // Define a variable to store productId
          pipeline: [
            {
              $unwind: "$variants", // Deconstruct the variants array
            },
            {
              $match: { $expr: { $eq: ["$variants._id", "$$productId"] } }, // Match variants by _id
            },
            {
              $project: {
                // Project the necessary fields
                productName: 1,
                category: 1,
                brand: 1,
                slug: 1,
                variant: "$variants",
              },
            },
          ],
          as: "products.productDetails", // Populate product details in a new field
        },
      },
      {
        $unwind: "$products.productDetails", // Deconstruct the productDetails array
      },
      {
        $lookup: {
          from: "brands", // Lookup in the brands collection
          localField: "products.productDetails.brand", // Field from ProductModel
          foreignField: "_id", // Field from BrandModel
          as: "products.productDetails.brandDetails", // Populate brand details in a new field
        },
      },
      {
        $unwind: "$products.productDetails.brandDetails",
      },
      {
        $set: {
          "products.productDetails.brand": {
            $concat: [
              "$products.productDetails.brandDetails.title",
              "[(*)]",
              "$products.productDetails.brandDetails.image",
            ],
          },
        },
      },
      {
        $project: {
          "products.productDetails.brandDetails": false,
        },
      },
      // {$concat:["$productDetails.brand.title","[(*)]","$productDetails.brand.image"]}
      {
        $group: {
          _id: "$_id", // Group by order _id
          userId: { $first: "$userId" }, // Keep userId
          paymentMode: { $first: "$paymentMode" }, // Keep paymentMode
          status: { $first: "$status" }, // Keep status
          totalAmount: { $first: "$totalAmount" }, // Keep totalAmount
          address: { $first: "$address" }, // Keep address
          products: { $push: "$products" }, // Reconstruct the products array
          createdAt: { $first: "$createdAt" },
          updatedAt: { $first: "$updatedAt" },
        },
      },
      {
        $sort:{createdAt:-1}
      }
    ]);

    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
};
