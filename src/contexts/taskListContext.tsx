import { ReactNode, createContext, useEffect, useState } from "react";

interface PropsProvider { children: ReactNode }

type TaskListContextType = {
    taskList: TaskListType[];
    setTaskList: (newList: TaskListType[]) => void
}

export type TaskListType = {
    name: string;
    setTask: (newTask: TaskType) => void;
    deleteTask: (idTask: string) => void;
    moveTask: (task: TaskType, selectedList: TaskListType) => void;
    tasks: TaskType[]
}

export type TaskType = {
    taskName: string;
    discription?: string;
    id: string;
    status: boolean
}

interface taskListJSON {
    name: string;
    tasks: TaskType[]
}

const initialValue: TaskListContextType = {
    taskList: [],
    setTaskList: () => { }
}

export const taskListContext = createContext<TaskListContextType>(initialValue)

export const TaskListProvider = ({ children }: PropsProvider) => {
    const [taskList, setTaskList] = useState(initialValue.taskList)

    useEffect(() => {
        const localValue: taskListJSON[] = JSON.parse(localStorage.getItem('taskList') as string)

        if (localValue) {
            const valueJSON: TaskListType[] = localValue.map(item => ({
                name: item.name,
                setTask: function (newTask: TaskType) { this.tasks = [...this.tasks, newTask] },
                deleteTask: function (idTask: string) {
                    const taskUpdate = this.tasks.filter(item => item.id !== idTask)
                    this.tasks = taskUpdate
                },
                moveTask: function (task, selectedList) {
                    selectedList.tasks.push(task)
                    this.deleteTask(task.id)
                },
                tasks: item.tasks
            }))

            setTaskList(valueJSON)
        }
    }, [])

    useEffect(() => { setTimeout(() => localStorage.setItem('taskList', JSON.stringify(taskList))) }, [taskList])

    return (
        <taskListContext.Provider value={{ taskList, setTaskList }}>
            {children}
        </taskListContext.Provider>
    )
}