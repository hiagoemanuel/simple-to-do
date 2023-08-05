import { useState } from 'react'
import { AddButton } from './components/AddButton'
import { ModalAddList } from './components/ModalAddList'
import { TaskList } from './components/TaskList'
import { MainContainer } from './style/main'

function App() {
  const [handdleModal, sethanddleModal] = useState<boolean>(false)

  return (
    <MainContainer>
      <TaskList />
      <AddButton openModal={sethanddleModal} />
      <ModalAddList closeModal={sethanddleModal} handdleModal={handdleModal} />
    </MainContainer>
  )
}

export default App
