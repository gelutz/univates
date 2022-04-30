import { useEffect, useState } from 'react'
import { Task, TaskType } from '../Task'



export const TaskList = () => {
    const [listedTasks, setTasks] = useState<TaskType[]>([])

    useEffect(() => {
        fetch('http://localhost:3000/task/all')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                // setTasks((prevState: TaskType[]) => data && data as TaskType[])

            })
    }, [])

    return <>
        {listedTasks.forEach((task, index) => {
            return <Task key={index} id={task.id} title={task.title} description={task.description} />
        })}
    </>
}