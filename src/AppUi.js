import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoContext } from './TodoContext'
import { Modal } from './Modal';
import './styles/index.css'
import { TodoForm } from './TodoForm/TodoForm';

function AppUi(){
    // change context variables here
    const {visibleTodos,
         completeTodos, 
         deleteTodo,
         openModal,
         setOpenModal} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="container-task">
                <TodoCounter/>
                <div className="flex-wrapper">
                    <TodoSearch/>
                    <CreateTodoButton
                        openModal={openModal}
                        setOpenModal={setOpenModal}/>
                </div>
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
                {openModal && (
                <Modal>
                    <TodoForm/>
                </Modal>
                )}
                
            </div>
        </React.Fragment>
    );
}

export {AppUi}