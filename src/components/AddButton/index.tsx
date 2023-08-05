import { Button, Container, PlusButton } from "./style"

interface Props {
    openModal?: React.Dispatch<React.SetStateAction<boolean>>
}

export const AddButton = (props: Props) => {
    return (
        <Container>
            <Button
                onClick={() => props.openModal ? props.openModal(true) : ''}
                type="button"
                aria-labelledby="labeldiv">
                <PlusButton>
                    <span></span>
                    <span></span>
                </PlusButton>
            </Button>
        </Container>
    )
}