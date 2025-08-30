import React from 'react'
import AddTodo from './Components/AddTodo'
import Todo from './Components/Todo'
import { Provider } from 'react-redux'
import {store} from './app/Store'
const App = () => {
  return (
    <div className='w-full h-screen bg-gray-500 flex flex-col items-center'>
      <Provider store={store}>
      <AddTodo/>
      <Todo/>
      </Provider>
    </div>
  )
}

export default App