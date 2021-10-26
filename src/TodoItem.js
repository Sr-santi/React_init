import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props) {
    return (
        <li className="item-task">
            <span className="check"><i className="fas fa-check"></i></span>
            <p>{props.text}</p>
            <span className="delete"><i className="far fa-trash-alt"></i></span>
        </li>
    )
}

export {TodoItem}