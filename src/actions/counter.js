import {useContext} from 'react';
import {Counter} from '../providers/counter';

export default function() {
  const counter = useContext(Counter);

  const increment = () =>
    counter.dispatch({type: "increment"});

  const decrement = () =>
    counter.dispatch({type: "decrement"});

  return {
    decrement,
    increment
  }
}