import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  let categories = await prisma.categories.findMany();
  return categories;
});
