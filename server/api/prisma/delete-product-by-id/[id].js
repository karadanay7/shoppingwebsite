import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = Number(event.context.params.id);

  // Check if the product exists
  const existingProduct = await prisma.products.findFirst({
    where: { id: productId },
  });

  if (!existingProduct) {
    return { error: "Product not found" };
  }

  try {
    // Delete the product
    await prisma.products.delete({
      where: { id: productId },
    });

    return { message: "Product deleted successfully" };
  } catch (error) {
    return { error: "Failed to delete product" };
  }
});
