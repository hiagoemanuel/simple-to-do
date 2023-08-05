import { CloseButton, ModalContainer, ModalInput, ModalHeader, ModalSection } from "./style"

interface Props {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    handdleModal: boolean;
}

export const ModalAddList = (props: Props) => {
    return (
        <ModalSection $isOpen={props.handdleModal}>
            <ModalContainer>
                <ModalHeader>
                    <h1>Criar lista</h1>
                    <CloseButton onClick={() => props.closeModal(false)}>
                        <span></span>
                        <span></span>
                    </CloseButton>
                </ModalHeader>
                <ModalInput>
                    <input type="text" name="ListName" placeholder="Insira o nome *" />
                    <input type="submit" value="Criar" />
                </ModalInput>
            </ModalContainer>
        </ModalSection>
    )
}