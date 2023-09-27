import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productId = Number(event.context.params.id);

  try {
    // Check if the product exists
    const existingProduct = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });

    if (!existingProduct) {
      // If the product does not exist, return a 404 response
      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Product not found" }),
      };
    }

    // Delete the product
    await prisma.products.delete({
      where: {
        id: productId,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Product deleted successfully" }),
    };
  } catch (error) {
    console.error("Error deleting product:", error);

    // Return a 500 Internal Server Error response in case of an error
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }),
    };
  }
});
