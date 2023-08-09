import { BaseSyntheticEvent, ReactNode } from "react";

import { CloseButton, ModalContainer, ModalHeader, ModalInputs, ModalSection } from "./style"

interface Props {
    children: ReactNode;
    title: string;
    isOpen: boolean;
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    action: (event: BaseSyntheticEvent) => void;
}

export const ModalForm = (props: Props) => {
    return (
        <ModalSection $isOpen={props.isOpen} onSubmit={(event) => {
            event.preventDefault()
            props.action(event)
        }} >
            <ModalContainer>
                <ModalHeader>
                    <h1>{props.title}</h1>
                    <CloseButton onClick={() => props.closeModal(false)}>
                        <span></span><span></span>
                    </CloseButton>
                </ModalHeader>
                <ModalInputs>
                    {props.children}
                </ModalInputs>
            </ModalContainer>
        </ModalSection>
    )
}