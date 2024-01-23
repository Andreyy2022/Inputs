import { useState } from 'react';
import classes from './App.module.css';
import Inputs from './components/Inputs.js';
import { nanoid } from 'nanoid';

function App() {
  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);

  function double(index, note) {
    setNotes( [...notes.slice(0, index), note ** 2, ...notes.slice(index + 1)] );
  }

  const result = notes.map((note, index) => {
    return <li key={index} onClick={() => double(index, note)}>
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
  </div>
  );
}

export default App;