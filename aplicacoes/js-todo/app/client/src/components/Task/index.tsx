import React from "react";

export type TaskType = {
    id: number
    title: string
    description?: string
}

export const Task: React.FC<TaskType> = ({ ...task }) => {
    return <>
        <span>
            <div className="check">
                <button></button>
            </div>
            <div className="text-area">

                <div className="title">
                    <input type="text" name="title" id="id" value="title" />
                </div>

                <div className="description">
                    <input type="text" name="description" id="id" value="description" />
                </div>
            </div>
        </span>
    </>
}