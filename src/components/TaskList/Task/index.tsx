import { useState } from 'react'

import { ReactComponent as ThreeDotsSVG } from '../../../assets/three-dots.svg'
import { ReactComponent as TrashSVG } from '../../../assets/trash.svg'
import { ReactComponent as ArrowSVG } from '../../../assets/arrow.svg'

import { CheckBoxToDo, TaskCard, TaskDiscription, TaskMenu, TaskTitle } from "./style"
import { Responsive } from './responsive'

export const Task = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false)

    return (
        <TaskCard>
            <Responsive $menuIsOpen={menuIsOpen} />
            <TaskTitle>
                <h1>Task to do</h1>
                <TaskMenu>
                    <ul>
                        <li><TrashSVG /></li>
                        <li><ArrowSVG /></li>
                    </ul>
                    <ThreeDotsSVG className='t-dots' onClick={(): void => setMenuIsOpen(menu => !menu)} />
                    <CheckBoxToDo>
                        <input id="to-to-check" type="checkbox" title='checkbox' />
                        <label htmlFor="to-to-check">
                            <span></span><span></span>
                        </label>
                    </CheckBoxToDo>
                </TaskMenu>
            </TaskTitle>
            <TaskDiscription>This is the discription of my task</TaskDiscription>
        </TaskCard>
    )
}