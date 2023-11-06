import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const res = await prisma.orderItem.findFirst({
    where: { orderId: event.context.params.id },
  });
  return res;
});
