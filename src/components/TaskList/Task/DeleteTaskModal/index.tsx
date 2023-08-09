import { CloseButton, ModalContainer, ModalHeader, ModalSection } from "../../../ModalForm/style"
import { DeleteTask } from './style'

interface Props {
    idTask: string
    isOpen: boolean;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>,
    deleteTask: (idTask: string) => void
}

export const DeleteTaskModal = (props: Props) => {
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
                        props.deleteTask(props.idTask)
                        props.closeModal(false)
                    }} />
                    <input type="button" value="Não" onClick={() => props.closeModal(false)} />
                </DeleteTask>
            </ModalContainer>
        </ModalSection>
    )
}