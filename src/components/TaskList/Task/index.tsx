import { useState } from 'react'

import { ReactComponent as ThreeDotsSVG } from '../../../assets/three-dots.svg'
import { ReactComponent as TrashSVG } from '../../../assets/trash.svg'
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg'
import { DeleteTaskModal } from './DeleteTaskModal'

import { CheckBoxToDo, HamburgerButton, MenuList, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"
import { Responsive } from './responsive'

interface Props {
    title: string;
    discription?: string;
    id: string;
    deleteTask: (idTask: string) => void
}

export const Task = (props: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)
    const [deleteModalIsOpen, setDeleteModalIsOpen] = useState<boolean>(false)

    return (
        <TaskCard>
            <Responsive />
            <TaskTitle>
                <h1>{props.title}</h1>
                <TaskMenu>
                    <HamburgerButton $isOpen={menuIsOpen}>
                        <ThreeDotsSVG className='t-dots' onClick={() => setMenuIsOpen(menu => !menu)} />
                        <MenuList>
                            <li><TrashSVG onClick={() => setDeleteModalIsOpen(true)} /></li>
                            <li><ArrowSVG /></li>
                        </MenuList>
                    </HamburgerButton>
                    <CheckBoxToDo>
                        <input id={props.id} type="checkbox" title='checkbox' />
                        <label htmlFor={props.id}>
                            <span></span><span></span>
                        </label>
                    </CheckBoxToDo>
                </TaskMenu>
            </TaskTitle>
            {props.discription ? <TaskDiscription>{props.discription}</TaskDiscription> : ''}
            <DeleteTaskModal
                isOpen={deleteModalIsOpen}
                closeModal={setDeleteModalIsOpen}
                deleteTask={props.deleteTask}
                idTask={props.id}
            />
        </TaskCard>
    )
}