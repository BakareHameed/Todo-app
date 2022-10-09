import React from 'react'
import './App.css'
import './components/TodoForm'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {
  return (
    <div className='todo-app'>
      <TodoList/>
    </div>
  )
}

export default App