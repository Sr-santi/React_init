import React from 'react';
import './styles/CreateTodoButton.css'

function CreateTodoButton(props) {
    return (
        <button 
            className={`add-button ${!!props.openModal && "close-modal-button"}`}
            onClick={() => props.setOpenModal(!props.openModal)}>
            <i className="fas fa-plus"></i>
        </button>
    )
}

export {CreateTodoButton}