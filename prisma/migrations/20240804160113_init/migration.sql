-- CreateTable
CREATE TABLE "Toy" (
    "uiid" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "ownerUiid" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Toy_pkey" PRIMARY KEY ("uiid")
);

-- AddForeignKey
ALTER TABLE "Toy" ADD CONSTRAINT "Toy_ownerUiid_fkey" FOREIGN KEY ("ownerUiid") REFERENCES "User"("uiid") ON DELETE RESTRICT ON UPDATE CASCADE;
