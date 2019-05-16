import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './App';

// const Taro = {
//   name: "taro",
//   age: 10,
//   love: "Game"
// };

const listData = ["foo", "bar", "baz"];

ReactDOM.render(
  <Profile data={listData}/>,
  document.getElementById('root')
);
