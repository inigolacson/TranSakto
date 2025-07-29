-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Store" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "address" TEXT,
    "number" TEXT,
    "logoUrl" TEXT,
    "tagline" TEXT,
    "regTin" TEXT,
    "permitNumber" TEXT,
    "storeType" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Store_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Store" ("address", "createdAt", "id", "logoUrl", "name", "number", "permitNumber", "regTin", "storeType", "tagline", "updatedAt", "userId") SELECT "address", "createdAt", "id", "logoUrl", "name", "number", "permitNumber", "regTin", "storeType", "tagline", "updatedAt", "userId" FROM "Store";
DROP TABLE "Store";
ALTER TABLE "new_Store" RENAME TO "Store";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
