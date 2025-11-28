/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "lockedAt" TIMESTAMP(3),
ADD COLUMN     "lockedReason" TEXT,
ADD COLUMN     "scheduledDeletionAt" TIMESTAMP(3),
ALTER COLUMN "name" SET NOT NULL;
