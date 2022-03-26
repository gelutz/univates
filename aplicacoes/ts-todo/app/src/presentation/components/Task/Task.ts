import { join } from "path";
import { TComponent } from "src/domain/interfaces/TComponent";
import { TTask } from "src/domain/interfaces/TTask";
import { Component } from "../Component";

type TaskComponent = TTask & TComponent & {
    done?: boolean,
    description?: string,
    created_at?: Date
}

type ToString<T> = T extends Date ? string
    : T extends boolean ? string
    : T extends number ? string
    : string

type PropertiesToString<T> = {
    [K in keyof T]: ToString<T[K]>
}

export const Task = ({...task}: TaskComponent): TComponent & TTask => {
    if (typeof task.done == 'undefined') {
        task.done = false
    }
    
    if (typeof task.created_at == 'undefined') {
        task.completed_at = new Date()
    }

    return {
        async render() {
            const newTask: PropertiesToString<TTask> = {} as unknown as PropertiesToString<TTask>
            Object.entries(task).forEach(([key, value]: [string, string | Date | number | boolean]) => {
                if (typeof value != 'string') {
                    newTask[key] = value
                }
            })

            return await Component.parseHTML(join(__dirname, 'index.html'), [...task])            
        },
        ...task
    }
}