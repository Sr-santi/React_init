import React from 'react';
import { AppUi } from './AppUi';
import { TodoProvider } from './TodoContext'

/* const defaultTodos = [
  { text: 'Cortar cebolla', completed: true},
  { text: 'Take course', completed: false},
  { text: 'Caminar un poco', completed: false},
] */

function App() {
  

  React.useEffect(() => {
    console.log('use effect');
  })

  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
