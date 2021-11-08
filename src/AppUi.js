import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';

function AppUi({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    visibleTodos,
    completeTodos,
    deleteTodo,
}){
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

export {AppUi}