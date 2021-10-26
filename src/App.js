import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const todos = [
  { text: 'Cortar cebolla', completed: false},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
]

function App() {
  return (
    <React.Fragment>
      <div className="container-task">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map(todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
