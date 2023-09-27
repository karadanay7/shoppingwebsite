import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const productId = Number(event.context.params.id);

  // Check if the product with the given ID exists
  const existingProduct = await prisma.products.findUnique({
    where: { id: productId },
  });

  if (!existingProduct) {
    return {
      statusCode: 404, // Product not found
      body: { message: "Product not found" },
    };
  }

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
});
