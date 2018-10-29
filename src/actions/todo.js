import {useContext} from 'react';
import {ToDoContext} from '../providers/todo';

let id = 0;

export default function() {
  const todo = useContext(ToDoContext);

  const addToDo = text =>
    todo.dispatch({type: "addToDo", payload: {text, id: id++}});

  const removeToDo = id =>
    todo.dispatch({type: "removeToDo", payload: id});

  return {
    addToDo,
    removeToDo
  }
}