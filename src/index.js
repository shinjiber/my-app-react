import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Switch from './App';

const animals = ['cat', 'dog', 'mouse']
ReactDOM.render(
  <div>
    <ul>
      <li>{animals[0]}</li>
      <li>{animals[1]}</li>
      <li>{animals[2]}</li>
    </ul>
  </div>,
  document.getElementById('root')
);
