import React, { useContext } from 'react';

import { Counter } from './providers/counter';
import useCounterActions from './actions/counter';



export default function() {
  const {increment, decrement} = useCounterActions();
  const context = useContext(Counter);

  return (
    <>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <h1>{context.state}</h1>
    </>
  );
}