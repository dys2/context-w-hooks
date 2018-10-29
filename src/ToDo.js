import React, {useContext, useState} from 'react';
import {ToDoContext} from './providers/todo';
import useToDoActions from './actions/todo';


export default function() {
  const [text, setText] = useState("");
  const {state} = useContext(ToDoContext);
  const {addToDo, removeToDo} = useToDoActions();


  const changeHandler = e => setText(e.target.value);

  const submitHandler = () => {
    addToDo(text);
    setText("");
  }

  return (
    <div>
      <input type="text" value={text} onChange={changeHandler}/>
      <button onClick={submitHandler}>Submit</button>
      {state.map(todo => <ToDo {...todo} removeToDo={removeToDo} />)}
    </div>
  )
}

const ToDo = ({id, text, removeToDo}) => (
  <div>
    <p>{text}</p>
    <button onClick={() => removeToDo(id)}>X</button>
  </div>
);