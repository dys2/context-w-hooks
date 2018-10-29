import React, { createContext, useReducer } from 'react';

import reducer, { initialState } from '../reducers/todo';

const ToDoContext = createContext();

function ToDoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <ToDoContext.Provider value={value}>{children}</ToDoContext.Provider>;
}

const ToDoConsumer = ToDoContext.Consumer;

export { ToDoProvider, ToDoConsumer, ToDoContext };
