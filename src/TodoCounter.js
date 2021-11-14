import React from 'react';
import './styles/TodoCounter.css';
import { TodoContext } from './TodoContext'

function TodoCounter({completedTodos,totalTodos}) {
    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    )
}

export {TodoCounter}