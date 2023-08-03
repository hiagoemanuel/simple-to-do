import { AddButton } from './components/AddButton'
import { TaskList } from './components/TaskList'
import { MainContainer } from './style/main'

function App() {
  return (
    <MainContainer>
      <TaskList />
      <AddButton />
    </MainContainer>
  )
}

export default App
