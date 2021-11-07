import React from 'react';
import './styles/TodoSearch.css'

function TodoSearch({ searchValue, setSearchValue }) {
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value)
    }
    return (
        <input 
            className="search-bar" 
            placeholder="search a task"
            value={searchValue}
            onChange={onSearchValueChange}></input>
    )
}

export {TodoSearch}