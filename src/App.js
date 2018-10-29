import React, { Component } from 'react';

import Counter from './Counter';
import ToDo from './ToDo';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <ToDo />
      </div>
    );
  }
}

export default App;
