import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext'

function AppUi(){
    return (
        <React.Fragment>
            <div className="container-task">
                <TodoCounter/>
                <TodoSearch/>
                <TodoContext.Consumer>
                    {({visibleTodos, completeTodos, deleteTodo}) => (
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
                    )}
                </TodoContext.Consumer>
                <CreateTodoButton/>
            </div>
        </React.Fragment>
    );
}

export {AppUi}