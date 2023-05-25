import { ReactSVG } from 'react-svg'
import { TasksList } from './TasksList'
import { TabStyle, Title, TasksContainer, AddTask } from './style'

export const Tab = ({ title }) => {
    return (
        <TabStyle>
            <Title>{title}</Title>
            <TasksContainer>
                <TasksList />
                <AddTask>
                    <ReactSVG src='src/assets/icons/plus-sign.svg' />
                </AddTask>
            </TasksContainer>
        </TabStyle>
    )
}