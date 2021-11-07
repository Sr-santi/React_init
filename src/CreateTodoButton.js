import React from 'react';
import './styles/CreateTodoButton.css'

function CreateTodoButton(props) {
    const msg = 'Aqui se abrira el modal'
    const onClickButon = (msg) => {
        alert(msg);
    }
    return (
        <button 
            className="add-button"
            onClick={() => onClickButon(msg)}>
            <i className="fas fa-plus"></i>
        </button>
    )
}

export {CreateTodoButton}