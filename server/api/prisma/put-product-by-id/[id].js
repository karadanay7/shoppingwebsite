import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = Number(event.context.params.id);
  const body = await readBody(event);

  // Check if the product exists
  const existingProduct = await prisma.products.findFirst({
    where: { id: productId },
  });

  if (!existingProduct) {
    return { error: "Product not found" };
  }

  try {
    // Update the product with the new data
    const updatedProduct = await prisma.products.update({
      where: { id: productId },
      data: {
        title: body.title,
        description: body.description,
        categoryId: body.categoryId,
        price: body.price,
        image: body.image,
        stockQuantity: body.stockQuantity,
      },
    });

    return updatedProduct;
  } catch (error) {
    return { error: "Failed to update product" };
  }
});
