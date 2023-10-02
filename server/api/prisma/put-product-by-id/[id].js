import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // Assuming you have a productId in the request body to identify the product to edit
  const productId = body.productId;

  // Check if the product with the given productId exists
  const existingProduct = await prisma.products.findUnique({
    where: {
      id: productId,
    },
  });

  if (!existingProduct) {
    // Handle the case where the product with the given ID does not exist
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "Product not found" }),
    };
  }

  // Update the product with the new data
  const updatedProduct = await prisma.products.update({
    where: {
      id: productId,
    },
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
