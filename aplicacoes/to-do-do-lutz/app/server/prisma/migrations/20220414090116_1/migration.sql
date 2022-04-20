-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMPTZ(6),
    "done" BOOLEAN,
    "created_at" DATE,
    "deleted_at" DATE,
    "completed_at" DATE,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
