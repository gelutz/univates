import { DateRange } from "../dtos/TaskDTO";
import { Tasks } from '@prisma/client'

type getDateDTO = {
    created_at: Date | [Date, Date] | null
    completed_at: Date | [Date, Date] | null
    due_date: Date | [Date, Date] | null
}

export class Task implements Tasks {
    id: number;
    title: string;
    description: string | null;
    done: boolean | null;
    created_at: Date | null;
    deleted_at: Date | null;
    completed_at: Date | null;
    due_date: Date | null;

    constructor({ ...task }: Tasks) {
        Object.assign(this, task)
    }

    static getDateRange({ created_at, completed_at, due_date }: getDateDTO): DateRange {
        let range: DateRange = {}
        Object.entries({ created_at, completed_at, due_date }).forEach(([dateType, dateValue]) => {
            if (Array.isArray(dateValue)) {

                dateValue.sort((d1, d2) => {
                    return d1.getTime() - d2.getTime();
                })

                range[dateType] = {
                    gte: dateValue[0],
                    lte: dateValue[1]
                }
            }
            else if (typeof dateValue == typeof Date) {
                range[dateType] = dateValue
            }
        })

        return range
    }
}