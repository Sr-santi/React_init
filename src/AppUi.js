import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext'
import { Modal } from './Modal';

function AppUi(){
    // change context variables here
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
                <Modal>
                    <p>Teletransportacion</p>
                </Modal>
                <CreateTodoButton/>
            </div>
        </React.Fragment>
    );
}

export {AppUi}