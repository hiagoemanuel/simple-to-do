import { useState } from 'react'

import { ReactComponent as ThreeDotsSVG } from '../../../assets/three-dots.svg'
import { ReactComponent as TrashSVG } from '../../../assets/trash.svg'
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg'

import { CheckBoxToDo, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"
import { Responsive } from './responsive'

interface Props {
    title: string;
    discription?: string;
    id: string
}

export const Task = (props: Props) => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    return (
        <TaskCard>
            <Responsive $menuIsOpen={menuIsOpen} />
            <TaskTitle>
                <h1>{props.title}</h1>
                <TaskMenu>
                    <ul>
                        <li><TrashSVG /></li>
                        <li><ArrowSVG /></li>
                    </ul>
                    <ThreeDotsSVG className='t-dots' onClick={(): void => setMenuIsOpen(menu => !menu)} />
                    <CheckBoxToDo>
                        <input id={props.id} type="checkbox" title='checkbox' />
                        <label htmlFor={props.id}>
                            <span></span><span></span>
                        </label>
                    </CheckBoxToDo>
                </TaskMenu>
            </TaskTitle>
            <TaskDiscription>{props.discription}</TaskDiscription>
        </TaskCard>
    )
}