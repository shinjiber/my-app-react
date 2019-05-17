import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import InformationArea from './App';

const company = {
  phone: "089708780",
  mail: 'hoge@huga.com',
  name: "hoge-company",
  account: "hoge"
}

ReactDOM.render(
  <InformationArea props={company}/>,
  document.getElementById('root')
)