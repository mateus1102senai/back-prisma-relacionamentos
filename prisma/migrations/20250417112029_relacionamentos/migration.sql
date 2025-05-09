-- CreateTable
CREATE TABLE "animes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "episodes" INTEGER NOT NULL,
    "releaseYear" INTEGER NOT NULL,
    "studio" TEXT NOT NULL,
    "genres" TEXT NOT NULL,
    "rating" REAL NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "personagens" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "powers" TEXT NOT NULL,
    "anime" TEXT NOT NULL
);
