import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props) {
    return (
        <li>
            <span><i class="fas fa-check"></i></span>
            <p>{props.text}</p>
            <span><i class="fas fa-times"></i></span>
        </li>
    )
}

export {TodoItem}