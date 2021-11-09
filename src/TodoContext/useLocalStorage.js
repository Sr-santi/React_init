import React from 'react';

function useLocalStorage(itemName, initialValue){
    // own Hook
    const createLocalStorageItem = () => {
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      return initialValue;
    }
    const localStorageItem = localStorage.getItem(itemName)
    let parsedItem = localStorageItem ? JSON.parse(localStorageItem) : createLocalStorageItem();
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName,stringifiedItem);
      setItem(newItem);
    };
  
    return [item, saveItem];
}

export { useLocalStorage };