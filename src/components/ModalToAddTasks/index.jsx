import { useContext, useEffect } from "react"
import { Modal, ModalContainer, ModalHeader, TextArea, AddTask } from "./style"
import { TaskListContext } from "../../contexts/tasks-collection"

export const ModalToAddTasks = () => {
    const { taskCollection, setTaskCollection } = useContext(TaskListContext)

    useEffect(() => {
        window.onclick = ({ target }) => {
            const modal = document.getElementById('modal-to-tasks')
            const btnClose = document.getElementById('close-modal')

            if (target === modal || target === btnClose) modal.style.display = 'none'
        }
    }, [])

    const submitTask = () => {
        const title = document.getElementById('task').value
        const discription = document.getElementById('discription').value

        if (title.trim() !== '') {
            setTaskCollection([...taskCollection, {
                title: title,
                discription: discription
            }])
        }
    }

    return (
        <Modal id='modal-to-tasks'>
            <ModalContainer>
                <ModalHeader>
                    <h1>Adicione sua tarefa!</h1>
                    <button id='close-modal'>&times;</button>
                </ModalHeader>
                <TextArea>
                    <label htmlFor="task">Tarefa *</label>
                    <input type="text" name="task" id="task" />
                </TextArea>
                <TextArea>
                    <label htmlFor="discription">Descrição da tarefa</label>
                    <input type="text" name="discription" id='discription' />
                </TextArea>
                <AddTask onClick={submitTask} type="submit" value="Adicionar" />
            </ModalContainer>
        </Modal>
    )
}