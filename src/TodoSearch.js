import React from 'react';
import './styles/TodoSearch.css';
import { TodoContext } from './TodoContext';

function TodoSearch() {
    const searchVariable = React.useContext(TodoContext);
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        searchVariable.setSearchValue(event.target.value)
    }
    return (
        <input 
            className="search-bar" 
            placeholder="search a task"
            value={searchVariable.searchValue}
            onChange={onSearchValueChange}></input>
    )
}

export {TodoSearch}