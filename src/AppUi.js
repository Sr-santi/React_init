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
         setOpenModal,
         completedTodos,
         totalTodos,
         searchValue, 
         setSearchValue,
         addTodo} = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <div className="container-task">
                <TodoCounter 
                    completeTodos={completedTodos}
                    totalTodos={totalTodos}/>
                <div className="flex-wrapper">
                    <TodoSearch
                        searchValue={searchValue} 
                        setSearchValue={setSearchValue}/>
                    <CreateTodoButton
                        openModal={openModal}
                        setOpenModal={setOpenModal}/>
                </div>
                <TodoList>
                    <ul className="list-items">
                        {visibleTodos.map(todo => (
                            <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            completed={todo.completed}
                            onComplete={()=> completeTodos(todo.text)}
                            onDelete={()=> deleteTodo(todo.text)}/>
                        ))}
                    </ul>
                </TodoList>
                {openModal && (
                <Modal>
                    <TodoForm
                        addTodo={addTodo}
                        setOpenModal={setOpenModal}/>
                </Modal>
                )}
                
            </div>
        </React.Fragment>
    );
}

export {AppUi}