import React from 'react';
import { AppUi } from './AppUi';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
] */

function App() {
  const createLocalStorageTodos = () => {
    localStorage.setItem('TODOS_V1',JSON.stringify([]));
    return [];
  }
  const localStorageTodos = localStorage.getItem('TODOS_V1')

  let parseTodos = localStorageTodos ? JSON.parse(localStorageTodos) : createLocalStorageTodos();

  const [todos, setTodos] = React.useState(parseTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;
  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1',stringifiedTodos);
    setTodos(newTodos);
  }

  const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed ;
    saveTodos(newTodos)
  }
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    todos.splice(todoIndex,1);
    const newTodos = [...todos]
    saveTodos(newTodos)
  }
  return (
    <AppUi 
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      visibleTodos={visibleTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}/>
  );
}

export default App;
