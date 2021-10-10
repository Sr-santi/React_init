import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const e = React.createElement

function Title() {
  return (
    <h1 id="title">
      Oli React
    </h1>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
