import { AddButton } from "../AddButton"
import { Task } from "./Task"
import { ListContainer, ListTitle, TasksContainer } from "./style"

export const TaskList = () => {
    return (
        <ListContainer>
            <ListTitle>Para Fazer</ListTitle>
            <TasksContainer>
                <Task />
            </TasksContainer>
            <AddButton />
        </ListContainer>
    )
}