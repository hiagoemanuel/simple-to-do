import { Button, Container, PlusButton } from "./style"

export const AddButton = () => {
    const addTask = (): void => {
        console.log('hi');
    }

    return (
        <Container>
            <Button
                onClick={addTask}
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