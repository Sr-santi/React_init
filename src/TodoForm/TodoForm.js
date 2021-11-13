import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
    const [newTodovalue, setNewTodoValue] = React.useState('');
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);
    const onWrite = (event) => {
        setNewTodoValue(event.target.value);
    }
    const onCancel = () => {
        setOpenModal(false)
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodovalue);
        setNewTodoValue('');
        setOpenModal(false)
    }
    return (
        <form className="form" onSubmit={onAdd}>
            <div className="form-field">
                <label>task</label>
                <input 
                    value={newTodovalue} 
                    onChange={onWrite}  
                    placeholder="Ex: Do something awesome"/>
            </div>
            <div className="form-actions">
                <button type="button" onClick={onCancel}>Cancelar</button>
                <button type="submit">Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };