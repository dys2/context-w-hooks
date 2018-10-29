import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CounterProvider } from './providers/counter';
import { ToDoProvider } from './providers/todo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ToDoProvider><CounterProvider><App /></CounterProvider></ToDoProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
