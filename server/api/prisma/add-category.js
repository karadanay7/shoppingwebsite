import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const category = await prisma.categories.create({
    data: {
      name: body.name,
    },
  });

  return category;
});
