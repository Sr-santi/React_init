import React from 'react';
import { useLocalStorage } from './useLocalStorage'

const TodoContext = React.createContext();

function TodoProvider(props) {
    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const visibleTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text,
        });
        saveTodos(newTodos)
    }
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
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            visibleTodos,
            completeTodos,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };