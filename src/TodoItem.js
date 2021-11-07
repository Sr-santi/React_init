import React from 'react';
import './styles/TodoItem.css'

function TodoItem(props) {
    const onComplete = () => {
        alert('task completed '+props.text);
    }
    const onDelete = () => {
        alert('task deleted '+props.text);
    }

    let textClass = props.completed ? "completed" : ""
    let checkVisible = props.completed ? "visible" : ""
    return (
        <li className="item-task">
            <span className="check" onClick={onComplete}>
                <i className={`fas fa-check ${checkVisible}`}></i>
            </span>
            <p className={textClass}>{props.text}</p>
            <span className='delete' onClick={onDelete}>
                <i className="far fa-trash-alt"></i>
            </span>
        </li>
    )
}

export {TodoItem}