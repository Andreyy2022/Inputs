import { useState } from 'react';
import classes from './App.module.css';
import Inputs from './components/Inputs.js';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState('');

  function addNewValue() {
    setNotes([...notes, value]);
    setValue('');
  }

  const result = notes.map((note, index) => {
    return <li key={index}>
      {note}
    </li>
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
      <input value={value} onChange={event => setValue(event.target.value)} />
      <button onClick={addNewValue}>add</button>
  </div>
  );
}

export default App;