import { ReactSVG } from "react-svg"
import { Task, TaskHeader, TaskMenu, Discription } from "./style"
import { useContext } from "react"
import { TaskListContext } from "../../../contexts/tasks-collection"

export const TasksList = () => {
    const { taskCollection } = useContext(TaskListContext)
    return (
        <>
            {
                taskCollection.map((task, index) => (
                    <Task key={index}>
                        <TaskHeader>
                            <h1>{task.title}</h1>
                            <TaskMenu>
                                <button>
                                    <ReactSVG src='/assets/icons/trash.svg' />
                                </button>
                                <button>
                                    <ReactSVG src='/assets/icons/arrow.svg' />
                                </button>
                                <input type="checkbox" name="checkbox-task" id="task-completed" />
                            </TaskMenu>
                        </TaskHeader>
                        <Discription>{task.discription}</Discription>
                    </Task>
                ))
            }
        </>
    )
}