import { createContext, useState } from "react";

export const TaskListContext = createContext()

export const TaskListProvider = ({ children }) => {
    const [taskCollection, setTaskCollection] = useState([
        {
            title: 'First task',
            discription: ' Discription of first task'
        },
        {
            title: 'Second task',
            discription: 'Discription of second task'
        }
    ])

    return (
        <TaskListContext.Provider value={{ taskCollection, setTaskCollection }}>
            {children}
        </TaskListContext.Provider>
    )
}