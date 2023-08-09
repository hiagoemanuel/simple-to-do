import { BaseSyntheticEvent, useState } from "react";

import { AddButton } from "../AddButton"
import { ModalForm } from "../ModalForm";
import { Task } from "./Task"

import { ListContainer, ListTitle, TasksContainer } from "./style"

interface Props {
    title: string;
}

export interface Task {
    title: string;
    discription?: string;
    id: string;
}

const randomId = (title: string): string => title.replace('', ' ') + Math.random().toString()

export const TaskList = (props: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [arrayTask, setArrayTask] = useState<Task[]>([{
        title: 'First Task',
        discription: 'First discription',
        id: randomId('First Task'),
    }])

    const setTask = (event: BaseSyntheticEvent) => {
        const inputName: string = event.target[0].value
        const inputDescription: string = event.target[1].value

        if (inputName.trim()) {
            setArrayTask([...arrayTask, {
                title: inputName,
                discription: inputDescription,
                id: randomId(inputName)
            }])

            event.target[0].value = ''
            event.target[1].value = ''
            setModalIsOpen(false)
        } else {
            alert('Insira o nome da tarefa')
        }
    }

    const deleteTaskFromArrayTask = (idTask: string) => {
        const newArray = arrayTask.filter(item => item.id !== idTask)
        setArrayTask(newArray)
    }

    return (
        <ListContainer>
            <ListTitle>{props.title}</ListTitle>
            <TasksContainer>
                {
                    arrayTask.map((task, index) => <Task
                        title={task.title}
                        discription={task.discription}
                        id={task.id}
                        deleteTask={deleteTaskFromArrayTask}
                        key={index}
                    />)
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