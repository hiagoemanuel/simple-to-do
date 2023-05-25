import { ReactSVG } from "react-svg"
import { Task, TaskHeader, TaskMenu, Discription } from "./style"

export const TasksList = () => {
    return(
        <Task>
            <TaskHeader>
                <h1>My first Task</h1>
                <TaskMenu>
                    <button>
                        <ReactSVG src='src/assets/icons/arrow.svg' />
                    </button>
                    <input type="checkbox" name="checkbox-task" id="task-completed" />
                </TaskMenu>
            </TaskHeader>
            <Discription>This is my first task</Discription>
        </Task>
    )
}