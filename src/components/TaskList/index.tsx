import { BaseSyntheticEvent, useState } from "react";

import { AddButton } from "../AddButton"
import { ModalForm } from "../ModalForm";
import { Task } from "./Task"

import { ListContainer, ListTitle, TasksContainer } from "./style"

interface Props {
    title: string;
}

interface Task {
    title: string;
    discription: string
}

export const TaskList = (props: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [arrayTask, setArrayTask] = useState<Task[]>([])

    const setTask = (event: BaseSyntheticEvent) => {
        const inputName: string = event.target[0].value
        const inputDescription: string = event.target[1].value

        if (inputName.trim()) {
            setArrayTask([{
                title: inputName,
                discription: inputDescription
            }, ...arrayTask])
            
            event.target[0].value = ''
            event.target[1].value = ''
            setModalIsOpen(false)
        }
    }

    return (
        <ListContainer>
            <ListTitle>{props.title}</ListTitle>
            <TasksContainer>
                {
                    arrayTask.map((task, index) => <Task
                        title={task.title}
                        discription={task.discription}
                        id={Math.random().toString()}
                        key={index}
                    />)
                }
            </TasksContainer>
            <AddButton openModal={setModalIsOpen} />
            <ModalForm isOpen={modalIsOpen} closeModal={setModalIsOpen} action={(event) => setTask(event)}>
                <input type="text" placeholder="Nome *" />
                <input type="text" placeholder="Descrição" />
                <input type="submit" value="Criar" />
            </ModalForm>
        </ListContainer>
    )
}