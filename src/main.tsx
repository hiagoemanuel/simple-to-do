import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { TaskListProvider } from './contexts/taskListContext.tsx'

import './style/reset.css'
import './style/variables.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TaskListProvider>
      <App />
    </TaskListProvider>
  </React.StrictMode>,
)