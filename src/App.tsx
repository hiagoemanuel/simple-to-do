import { BaseSyntheticEvent, useContext, useState } from 'react'

import { taskListContext } from './contexts/taskListContext'

import { AddButton } from './components/AddButton'
import { ModalForm } from './components/ModalForm'
import { TaskList } from './components/TaskList'

import { MainContainer, TaskListContainer, Footer } from './style/main'

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const { taskList, setTaskList } = useContext(taskListContext)

  const setList = (event: BaseSyntheticEvent) => {
    const inputValue: string = event.target[0].value

    if (inputValue.trim()) {
      setTaskList([...taskList, {
        name: inputValue,
        setTask: function (newTask) { this.tasks = [...this.tasks, newTask] },
        deleteTask: function (idTask: string) {
          const taskUpdate = this.tasks.filter(item => item.id !== idTask)
          this.tasks = taskUpdate
        },
        moveTask: function (task, selectedList) {
          selectedList.tasks.push(task)
          this.deleteTask(task.id)
        },
        tasks: []
      }])

      event.target[0].value = ''
      setModalIsOpen(false)
    } else {
      alert('É nescessário um nome para sua lista')
    }
  }

  return (
    <MainContainer>
      <TaskListContainer>
        {
          taskList.map((list, index) => (
            <TaskList list={list} key={index} />
          ))
        }
        <AddButton openModal={setModalIsOpen} />
      </TaskListContainer>
      <ModalForm title={'Criar Lista'} isOpen={modalIsOpen} closeModal={setModalIsOpen} action={(event) => setList(event)} >
        <input type="text" name="ListName" placeholder="Insira o nome *" />
        <input type="submit" value="Criar" />
      </ModalForm>
      <Footer>
        <h5>desenvolvido por <a href="https://github.com/hiagoemanuel">{'<'}hiago emanuel{'>'}</a></h5>
      </Footer>
    </MainContainer>
  )
}

export default App
