-- CreateTable
CREATE TABLE "DeletionConfirmation" (
    "id" TEXT NOT NULL,
    "confirmationCode" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "DeletionConfirmation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DeletionConfirmation_confirmationCode_key" ON "DeletionConfirmation"("confirmationCode");

-- CreateIndex
CREATE INDEX "DeletionConfirmation_provider_providerAccountId_idx" ON "DeletionConfirmation"("provider", "providerAccountId");

-- AddForeignKey
ALTER TABLE "DeletionConfirmation" ADD CONSTRAINT "DeletionConfirmation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
