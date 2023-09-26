import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  let orders = await prisma.orders.findMany();
  return orders;
});
