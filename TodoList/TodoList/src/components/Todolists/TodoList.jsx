import React  from "react";
import { useContext, useMemo } from "react";
import { TodoContext } from '../../TodoProvider/ContextProvider';
import TodoItem from '../Todoitems/TodoItem';

function TodoList(){
    const { state } = useContext(TodoContext);
    const { todos, filter } = state;
  
    const filteredTodos = useMemo(() => {
      switch (filter) {
        case 'active':
          return todos.filter(todo => !todo.completed);
        case 'completed':
          return todos.filter(todo => todo.completed);
        default:
          return todos;
      }
    }, [todos, filter]);
  
    return (
      <ul className="list-none p-0">
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );

}export default TodoList