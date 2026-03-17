/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `content` column on the `Post` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[post_id,category_id]` on the table `Post_Category` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_post_id_fkey";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Admin_id_seq";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ADD COLUMN     "content" JSONB;

-- DropTable
DROP TABLE "Image";

-- CreateIndex
CREATE UNIQUE INDEX "Post_Category_post_id_category_id_key" ON "Post_Category"("post_id", "category_id");
