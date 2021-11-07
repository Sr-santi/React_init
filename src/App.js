import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    setTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos.splice(todoIndex,1);
    const newTodos = [...todos]
    setTodos(newTodos)
  }
  return (
    <React.Fragment>
      <div className="container-task">
        <TodoCounter 
          total={totalTodos}
          completed={completedTodos}/>
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          />
        <TodoList>
          {visibleTodos.map(todo => (
            <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed}
              onComplete={()=> completeTodos(todo.text)}
              onDelete={()=> deleteTodo(todo.text)}/>
          ))}
        </TodoList>
        <CreateTodoButton/>
      </div>
    </React.Fragment>
  );
}

export default App;
