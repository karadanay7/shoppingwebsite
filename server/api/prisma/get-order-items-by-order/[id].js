import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const orderId = event.context.params.orderId; // Assuming you have the orderId in your event

  try {
    // Find the order items for the given orderId
    const orderItems = await prisma.orderItem.findMany({
      where: { orderId },
      include: {
        product: true,
      },
    });

    return orderItems;
  } catch (error) {
    console.error("Error retrieving order items:", error);
    return { error: "Error retrieving order items" };
  }
});
