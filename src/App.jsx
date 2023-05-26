import { Reset } from "./styles/reset"
import { Variables } from "./styles/variables"
import { GlobalStyle } from "./styles/global-style"
import styled from "styled-components"
import { Tab } from "./components/Tab"
import { ModalToAddTasks } from "./components/ModalToAddTasks"

function App() {
  return (
    <>
      <Reset />
      <Variables />
      <GlobalStyle />

      <Container>
        <Tab title='Para Fazer' />
      </Container>
      <ModalToAddTasks />
    </>
  )
}

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 20px 2%;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  background-color: var(--primary-color);
`

export default App
