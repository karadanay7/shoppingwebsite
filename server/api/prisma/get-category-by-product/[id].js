import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = event.context.params.productId; // Assuming you have the productId in your event

  try {
    // Find the product by its ID and include the category
    const productWithCategory = await prisma.products.findUnique({
      where: { id: productId },
      include: {
        category: true,
      },
    });

    if (!productWithCategory) {
      return { error: "Product not found" };
    }

    return productWithCategory.category;
  } catch (error) {
    console.error("Error retrieving category by product:", error);
    return { error: "Error retrieving category by product" };
  }
});
