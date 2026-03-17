/*
  Warnings:

  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Post_Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[slug]` on the table `Post` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `id` on the `Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `excerpt` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Post` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id` on the `Post` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id` on the `Post_Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `post_id` on the `Post_Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `category_id` on the `Post_Category` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Post_Category" DROP CONSTRAINT "Post_Category_category_id_fkey";

-- DropForeignKey
ALTER TABLE "Post_Category" DROP CONSTRAINT "Post_Category_post_id_fkey";

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ADD COLUMN     "excerpt" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Post_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Post_Category" DROP CONSTRAINT "Post_Category_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "post_id",
ADD COLUMN     "post_id" UUID NOT NULL,
DROP COLUMN "category_id",
ADD COLUMN     "category_id" UUID NOT NULL,
ADD CONSTRAINT "Post_Category_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Post_slug_key" ON "Post"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Post_Category_post_id_category_id_key" ON "Post_Category"("post_id", "category_id");

-- AddForeignKey
ALTER TABLE "Post_Category" ADD CONSTRAINT "Post_Category_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post_Category" ADD CONSTRAINT "Post_Category_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;
