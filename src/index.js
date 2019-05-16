import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Profile from './App';

const Taro = {
  name: "taro",
  age: 10,
  love: "Game"
};



ReactDOM.render(
  <Profile data={Taro}/>,
  document.getElementById('root')
);
