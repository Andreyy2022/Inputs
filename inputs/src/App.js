import { useState } from 'react';
import classes from './App.module.css';
import Inputs from './components/Inputs.js';
import { nanoid } from 'nanoid';

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];



function App() {
  const [notes, setNotes] = useState(initNotes);
  const [valueNewObj, setValueNewObj] = useState(getNewObj());

  function getNewObj() {
  let newObj;
  return  newObj = {
      id: nanoid(),
      prop1: '',
      prop2: '',
      prop3: '',
    }
  }

  function add() {
    setNotes([...notes, valueNewObj]);
    setValueNewObj(getNewObj);
  }

  const result = notes.map(note => {
    return <li key={note.id}>
      <span>{note.prop1}  </span>
      <span>{note.prop2}  </span>
      <span>{note.prop3}</span>
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
      <input value={valueNewObj.prop1} onChange={event => setValueNewObj({...valueNewObj, ['prop1']: event.target.value})}/>
      <input value={valueNewObj.prop2} onChange={event => setValueNewObj({...valueNewObj, ['prop2']: event.target.value})}/>
      <input value={valueNewObj.prop3} onChange={event => setValueNewObj({...valueNewObj, ['prop3']: event.target.value})}/>
      <br/>
      <button onClick={add}>add object</button>
  </div>
  );
}

export default App;