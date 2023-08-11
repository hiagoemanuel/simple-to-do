import { BaseSyntheticEvent, useContext, useState } from "react";

import { TaskListType, taskListContext } from "../../contexts/taskListContext";

import { ReactComponent as TrashSVG } from "../../assets/trash.svg";
import { AddButton } from "../AddButton"
import { ModalForm } from "../ModalForm";
import { Task } from "./Task"

import { ListContainer, ListTitle, TasksContainer } from "./style"

interface Props { list: TaskListType; }

const randomId = (title: string): string => title.replace('', ' ') + Math.random().toString()

export const TaskList = ({ list }: Props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [deleteListModalIsOpen, setDeleteListModalIsOpen] = useState(false)
    const { taskList, setTaskList } = useContext(taskListContext)

    const deleteList = () => {
        const listUpdate = taskList.filter(item => item.name !== list.name)
        setTaskList(listUpdate)
        setDeleteListModalIsOpen(false)
    }

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
        setTaskList([...taskList])
    }

    return (
        <ListContainer>
            <ListTitle>
                <h1>{list.name}</h1>
                <div onClick={() => setDeleteListModalIsOpen(true)}><TrashSVG /></div>
            </ListTitle>
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
            <ModalForm
                title={'Deseja excluir essa lista?'}
                isOpen={deleteListModalIsOpen}
                closeModal={setDeleteListModalIsOpen}
                action={() => { }}
            >
                <input type="submit" value="Sim" onClick={() => deleteList()} />
                <input type="submit" value="Não" onClick={() => setDeleteListModalIsOpen(false)} />
            </ModalForm>
        </ListContainer>
    )
}