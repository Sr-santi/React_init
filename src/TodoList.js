import React from 'react';
import './styles/TodoList.css'

function TodoList(props) {
    return (
        <section>
            <ul className="list-items">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList}