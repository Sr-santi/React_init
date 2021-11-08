import React from 'react';
import { AppUi } from './AppUi';

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
] */

function useLocalStorage(itemName, initialValue){
  const createLocalStorageItem = () => {
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    return initialValue;
  }
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : createLocalStorageItem();
  const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName,stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

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
