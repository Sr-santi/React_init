import React from 'react';
import './styles/TodoCounter.css';
import { TodoContext } from './TodoContext'

function TodoCounter() {
    const counterVariables = React.useContext(TodoContext);
    return (
        <h2 className="TodoCounter">Has completado {counterVariables.completedTodos} de {counterVariables.totalTodos} TODOs</h2>
    )
}

export {TodoCounter}