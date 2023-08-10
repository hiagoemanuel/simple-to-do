import { ReactNode, createContext, useState } from "react";

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

const initialValue: TaskListContextType = {
    taskList: [{
        name: 'Para Fazer',
        setTask: function (newTask: TaskType) { this.tasks = [...this.tasks, newTask] },
        deleteTask: function (idTask: string) {
            const taskUpdate = this.tasks.filter(item => item.id !== idTask)
            this.tasks = taskUpdate
        },
        moveTask: function (task, selectedList) {
            selectedList.tasks.push(task)
            this.deleteTask(task.id)
        },
        tasks: [
            {
                taskName: 'First Task',
                discription: 'this is my first task',
                id: 'FirstTask0.89741985298752',
                status: false
            }
        ]
    }, {
        name: 'Fazendo',
        setTask: function (newTask: TaskType) { this.tasks = [...this.tasks, newTask] },
        deleteTask: function (idTask: string) {
            const taskUpdate = this.tasks.filter(item => item.id !== idTask)
            this.tasks = taskUpdate
        },
        moveTask: function (task, selectedList) {
            selectedList.tasks.push(task)
            this.deleteTask(task.id)
        },
        tasks: [
            {
                taskName: 'Second Task',
                discription: 'this is my second task',
                id: 'SecondTask0.189904235342352',
                status: false
            }
        ]
    }],
    setTaskList: () => { }
}

export const taskListContext = createContext<TaskListContextType>(initialValue)

export const TaskListProvider = ({ children }: PropsProvider) => {
    const [taskList, setTaskList] = useState(initialValue.taskList)

    return (
        <taskListContext.Provider value={{ taskList, setTaskList }}>
            {children}
        </taskListContext.Provider>
    )
}