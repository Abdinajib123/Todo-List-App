import { useState } from 'react'
import { TodoProvider } from './TodoProvider/ContextProvider';
import TodoForm from './components/Todoforms/TodoForm';
import TodoList from './components/Todolists/TodoList';
import TodoFilter from './components/Todofilters/TodoFilter';


function App() {


  return (
      <TodoProvider>
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold mb-4">Todo List</h1>
          <TodoForm />
          <TodoFilter />
          <TodoList />
        </div>
      </TodoProvider>
    );

}

export default App
