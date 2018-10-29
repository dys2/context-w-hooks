import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from '../reducers/counter';

const Counter = createContext();

function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Counter.Provider value={value}>{children}</Counter.Provider>;
}

const CounterConsumer = Counter.Consumer;

export { CounterProvider, CounterConsumer, Counter };
