import { useState } from 'react';
import classes from './App.module.css';
import Inputs from './components/Inputs.js';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState('');
  const [indexValue, setIndexValue] = useState('');

  function valueIndex(note, index) {
    setValue(note);
    setIndexValue(index);
  }

  function replace() {
    setNotes([...notes.slice(0, indexValue), value, ...notes.slice(indexValue + 1)]);
  }

  function changeEndNotes() {
    setNotes(notes.reverse());
  //  console.log(notes);
  }

  const result = notes.map((note, index) => {
    return <div key={index}>
        <li onClick={() => valueIndex(note, index)}>
          {note}
        </li>
        <button onClick={() => setNotes([...notes.slice(0, index), ...notes.slice(index + 1)])}>delete</button>
      </div>
  });

  return (
  <div className={classes.app}>
    <h2 className={classes.title}>CSS Module Inputs</h2>
    <div className={classes.wrapper}>
      <Inputs />
    </div>
      <ul>
        {result}
      </ul>
      <input value={value} onChange={(event) => setValue(event.target.value)} onBlur={indexValue => replace(indexValue)} />
      <br/>
      <button onClick={changeEndNotes}>reverse the lists</button>
      {console.log(notes)}
  </div>
  );
}

export default App;