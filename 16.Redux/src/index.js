import React from 'react';
import ReactDom from 'react-dom';

import App from './containers/app';
import { createStore } from 'redux';
import comments from "./reducers";

const initilalState = [
  {index: '0', author: 'au1', text: '11', date: 'today', time: 'tomorrow'},
  {index: '1', author: 'au2', text: '22', date: 'today', time: 'tomorrow'},
  {index: '2', author: 'au3', text: '33', date: 'today', time: 'tomorrow'}
]; // id??

const store = createStore(comments, initilalState);

ReactDom.render(<App store={store}/>, document.getElementById('app'));
