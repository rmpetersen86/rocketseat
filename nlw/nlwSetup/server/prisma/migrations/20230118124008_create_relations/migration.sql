-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_day_habbits" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "day_id" TEXT NOT NULL,
    "habbit_id" TEXT NOT NULL,
    CONSTRAINT "day_habbits_day_id_fkey" FOREIGN KEY ("day_id") REFERENCES "days" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "day_habbits_habbit_id_fkey" FOREIGN KEY ("habbit_id") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_day_habbits" ("day_id", "habbit_id", "id") SELECT "day_id", "habbit_id", "id" FROM "day_habbits";
DROP TABLE "day_habbits";
ALTER TABLE "new_day_habbits" RENAME TO "day_habbits";
CREATE UNIQUE INDEX "day_habbits_day_id_habbit_id_key" ON "day_habbits"("day_id", "habbit_id");
CREATE TABLE "new_habbit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habbit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "habbit_week_days_habbit_id_fkey" FOREIGN KEY ("habbit_id") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habbit_week_days" ("habbit_id", "id", "week_day") SELECT "habbit_id", "id", "week_day" FROM "habbit_week_days";
DROP TABLE "habbit_week_days";
ALTER TABLE "new_habbit_week_days" RENAME TO "habbit_week_days";
CREATE UNIQUE INDEX "habbit_week_days_habbit_id_week_day_key" ON "habbit_week_days"("habbit_id", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
