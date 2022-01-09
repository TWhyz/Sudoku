import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Sudoku from './Board.js';

ReactDOM.render(
  <React.StrictMode>
    <Sudoku />
  </React.StrictMode>,
  document.getElementById('root')
);
