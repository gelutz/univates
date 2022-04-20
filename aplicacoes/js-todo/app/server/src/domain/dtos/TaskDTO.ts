import { Tasks } from "@prisma/client";

export type DateRange = {
    created_at?: {
        gte: Date,
        lte: Date
    }
    completed_at?: {
        gte: Date,
        lte: Date
    }
    due_date?: {
        gte: Date,
        lte: Date
    }
}

export type TaskDTO = Tasks