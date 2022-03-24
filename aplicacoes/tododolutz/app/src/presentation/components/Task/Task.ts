import { TComponent } from "src/domain/interfaces/TComponent";
import { TTask } from "src/domain/interfaces/TTask";
import { Component } from "../Component";

export const Task = (task: TTask): TComponent & TTask => {
    const element = Component.create('span')

    return {
        ...task,
        render(): HTMLElement {
            return element
        }
    }
}