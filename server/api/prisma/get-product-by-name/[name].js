import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const productName = event.context.params.name;

  // Use the 'findFirst' method with the 'where' clause
  let product = await prisma.products.findFirst({
    where: { name: productName },
  });

  return product;
});
