import OrderModel from "../../models/Orders/OrderModel";

export const getAllOrders = async () => {
    try {
      const allOrders = await OrderModel.aggregate([
        {
          $lookup: {
            from: "products", // Assuming your products collection is named "products"
            localField: "products.productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $project: {
            userId: 1,
            paymentMode: 1,
            status: 1,
            totalAmount: 1,
            products: 1,
            address: 1,
            productDetails: 1,
          },
        },
      ]);
  
      return allOrders;
    } catch (error) {
      throw error;
    }
  };