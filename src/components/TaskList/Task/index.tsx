import { useState } from 'react'

import { TaskListType, TaskType } from '../../../contexts/taskListContext'

import { ReactComponent as ThreeDotsSVG } from '../../../assets/three-dots.svg'
import { ReactComponent as TrashSVG } from '../../../assets/trash.svg'
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg'
import { DeleteTaskModal } from './DeleteTaskModal'

import { CheckBoxToDo, HamburgerButton, MenuList, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"
import { Responsive } from './responsive'

interface Props {
    task: TaskType;
    list: TaskListType
}

export const Task = ({ task, list }: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)

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
                            <li><ArrowSVG /></li>
                        </MenuList>
                    </HamburgerButton>
                    <CheckBoxToDo>
                        <input id={task.id} type="checkbox" title='checkbox' />
                        <label htmlFor={task.id} onClick={() => { task.status = !task.status }}>
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
        </TaskCard>
    )
}