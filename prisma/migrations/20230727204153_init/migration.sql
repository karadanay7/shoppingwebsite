/*
  Warnings:

  - You are about to drop the column `rating` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "rating",
DROP COLUMN "userId";
