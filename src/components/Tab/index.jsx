import { ReactSVG } from 'react-svg'
import { TasksList } from './TasksList'
import { TabStyle, Title, TasksContainer, AddTask } from './style'

export const Tab = ({ title }) => {
    const openModal = () => {
        const modal = document.getElementById('modal-to-tasks')
        modal.style.display = 'flex'
    }

    return (
        <TabStyle>
            <Title>{title}</Title>
            <TasksContainer>
                <TasksList />
                <AddTask onClick={openModal}>
                    <ReactSVG src='src/assets/icons/plus-sign.svg' />
                </AddTask>
            </TasksContainer>
        </TabStyle>
    )
}