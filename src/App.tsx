import { BaseSyntheticEvent, useState } from 'react'

import { AddButton } from './components/AddButton'
import { ModalForm } from './components/ModalForm'
import { TaskList } from './components/TaskList'

import { MainContainer } from './style/main'

interface TaskList { name: string }

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [arrayTaskList, setArrayTaskList] = useState<TaskList[]>([{ name: 'Para Fazer' }])

  const setTaskList = (event: BaseSyntheticEvent) => {
    const inputValue: string = event.target[0].value

    if (inputValue.trim()) {
      setArrayTaskList([{ name: inputValue }, ...arrayTaskList])
      event.target[0].value = ''
      setModalIsOpen(false)
    } else {
      alert('É nescessário um nome para sua lista')
    }
  }

  return (
    <MainContainer>
      {
        arrayTaskList.map((list, index) => (
          <TaskList key={index} title={list.name} />
        ))
      }
      <AddButton openModal={setModalIsOpen} />
      <ModalForm isOpen={modalIsOpen} closeModal={setModalIsOpen} action={(event) => setTaskList(event)} >
        <input type="text" name="ListName" placeholder="Insira o nome *" />
        <input type="submit" value="Criar" />
      </ModalForm>
    </MainContainer>
  )
}

export default App
