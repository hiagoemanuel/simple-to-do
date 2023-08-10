import { useContext } from "react";
import { TaskListType, taskListContext } from "../../../../contexts/taskListContext";

import { CloseButton, ModalContainer, ModalHeader, ModalSection } from "../../../ModalForm/style"
import { DeleteTask } from './style'

interface Props {
    idTask: string
    list: TaskListType
    isOpen: boolean;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DeleteTaskModal = (props: Props) => {
    const { taskList, setTaskList } = useContext(taskListContext)

    return (
        <ModalSection $isOpen={props.isOpen}>
            <ModalContainer>
                <ModalHeader>
                    <h1>Deseja excluir essa Tarefa?</h1>
                    <CloseButton onClick={() => props.closeModal(false)}>
                        <span></span><span></span>
                    </CloseButton>
                </ModalHeader>
                <DeleteTask>
                    <input type="button" value="Sim" onClick={() => {
                        props.list.deleteTask(props.idTask)
                        setTaskList([...taskList])
                        props.closeModal(false)
                    }} />
                    <input type="button" value="Não" onClick={() => props.closeModal(false)} />
                </DeleteTask>
            </ModalContainer>
        </ModalSection>
    )
}