import { ReactSVG } from "react-svg"
import { CheckBoxToDo, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"

export const Task = () => {
    return (
        <TaskCard>
            <TaskTitle>
                <h1>Task to do</h1>
                <TaskMenu>
                    <li><ReactSVG src="src/assets/trash.svg" /></li>
                    <li><ReactSVG src="src/assets/arrow.svg" /></li>
                    <li>
                        <CheckBoxToDo>
                            <input id="to-to-check" type="checkbox" title='checkbox' />
                            <label htmlFor="to-to-check">
                                <span></span>
                                <span></span>
                            </label>
                        </CheckBoxToDo>
                    </li>
                </TaskMenu>
            </TaskTitle>
            <TaskDiscription>This is the discription of my task</TaskDiscription>
        </TaskCard>
    )
}