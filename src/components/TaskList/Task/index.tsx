import { BaseSyntheticEvent, useContext, useState } from 'react'

import { TaskListType, TaskType, taskListContext } from '../../../contexts/taskListContext'

import { ReactComponent as ThreeDotsSVG } from '../../../assets/three-dots.svg'
import { ReactComponent as TrashSVG } from '../../../assets/trash.svg'
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg'
import { DeleteTaskModal } from './DeleteTaskModal'
import { ModalForm } from '../../ModalForm'

import { CheckBoxToDo, HamburgerButton, MenuList, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"
import { Responsive } from './responsive'

interface Props {
    task: TaskType;
    list: TaskListType
}

export const Task = ({ task, list }: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const [moveTaskModal, setMoveTaskModal] = useState<boolean>(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)
    const { taskList, setTaskList } = useContext(taskListContext)

    const moveTask = (event: BaseSyntheticEvent) => {
        const selectedList = taskList.filter(list => list.name === event.target[0].value)[0]
        list.moveTask(task, selectedList)
        setTaskList([...taskList])
        setMoveTaskModal(false)
    }

    return (
        <TaskCard>
            <Responsive />
            <TaskTitle>
                <h1>{task.taskName}</h1>
                <TaskMenu>
                    <HamburgerButton $isOpen={menuIsOpen}>
                        <ThreeDotsSVG className='t-dots' onClick={() => setMenuIsOpen(menu => !menu)} />
                        <MenuList>
                            <li><TrashSVG onClick={() => setDeleteModalIsOpen(true)} /></li>
                            <li><ArrowSVG onClick={() => setMoveTaskModal(true)} /></li>
                        </MenuList>
                    </HamburgerButton>
                    <CheckBoxToDo>
                        <input id={task.id} type="checkbox" title='checkbox' checked={task.status} readOnly />
                        <label htmlFor={task.id} onClick={() => {
                            task.status = !task.status
                            setTaskList([...taskList])
                        }}>
                            <span></span><span></span>
                        </label>
                    </CheckBoxToDo>
                </TaskMenu>
            </TaskTitle>
            {task.discription ? <TaskDiscription>{task.discription}</TaskDiscription> : ''}
            <DeleteTaskModal
                idTask={task.id}
                list={list}
                isOpen={deleteModalIsOpen}
                closeModal={setDeleteModalIsOpen}
            />
            <ModalForm
                title='Mover tarefa'
                isOpen={moveTaskModal}
                closeModal={() => setMoveTaskModal(false)}
                action={(event) => moveTask(event)}
            >
                <select name='list' title="select-task-list">
                    {taskList.map((item, index) => (
                        list.name !== item.name ? <option value={item.name} key={index}>{item.name}</option> : ''
                    ))}
                </select>
                <input type="submit" value="Mover" />
            </ModalForm>
        </TaskCard>
    )
}