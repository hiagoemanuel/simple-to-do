import { BaseSyntheticEvent, useState } from "react";

import { TaskListType } from "../../contexts/taskListContext";

import { AddButton } from "../AddButton"
import { ModalForm } from "../ModalForm";
import { Task } from "./Task"

import { ListContainer, ListTitle, TasksContainer } from "./style"

interface Props { list: TaskListType; }

const randomId = (title: string): string => title.replace('', ' ') + Math.random().toString()

export const TaskList = ({ list }: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const setTask = (event: BaseSyntheticEvent) => {
        const inputName: string = event.target[0].value
        const inputDescription: string = event.target[1].value

        if (inputName.trim()) {
            list.setTask({
                taskName: inputName,
                discription: inputDescription,
                id: randomId(inputName),
                status: false
            })

            event.target[0].value = ''
            event.target[1].value = ''
            setModalIsOpen(false)
        } else {
            alert('Insira o nome da tarefa')
        }
    }

    return (
        <ListContainer>
            <ListTitle>{list.name}</ListTitle>
            <TasksContainer>
                {
                    list.tasks.map((task, index) => <Task task={task} list={list} key={index} />)
                }
            </TasksContainer>
            <AddButton openModal={setModalIsOpen} />
            <ModalForm title={'Criar Tarefa'} isOpen={modalIsOpen} closeModal={setModalIsOpen} action={(event) => setTask(event)}>
                <input type="text" placeholder="Nome *" />
                <input type="text" placeholder="Descrição" />
                <input type="submit" value="Criar" />
            </ModalForm>
        </ListContainer>
    )
}