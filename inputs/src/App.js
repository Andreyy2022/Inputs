import { useState } from 'react';
import classes from './App.module.css';
import Inputs from './components/Inputs.js';
import { nanoid } from 'nanoid';

function getEmptyObj() {
  const emptyObj = {
    id: nanoid(),
    prop1: ' ',
    prop2: ' ',
    prop3: ' ',
  }

  return emptyObj;
}

const mouseText = [
  {
     id: 'tl2zI5J3IbLwukybTEsIxXXb6',
     prop1: 'Тише',
     prop2: 'мыши',
     prop3: 'кот на крыше',
  },
  {
     id: 'ViWgVtvU2qRo6huLg18DdYuio',
     prop1: 'А котята',
     prop2: 'ещё',
     prop3: 'выше',
  },
];

function App() {
  const [arrObj, setArrObj] = useState(mouseText);
  const [obj, setObj] = useState( getEmptyObj() );
  const [idToEdit, setIdToEdi] = useState(null);

  function add() {
    setArrObj([...arrObj, obj]);
    setObj( getEmptyObj );
  }

  function change(prop, event) {
    setObj({...obj, [prop]: event.target.value});
  }

  function delObj(id) {
    setArrObj(arrObj.filter( obj => obj.id != id ));
  }

  function getValue(prop) {
    arrObj.reduce( (res, obj) => {
      if (obj.id == idToEdit) {
        return obj[prop];
      } else {
        return res;
      }
    } );
  }

  function change(prop, event) {
    setArrObj( arrObj.map( obj => {
      if (obj.id == idToEdit) {
        return {...obj, [prop]:event.target.value};
      } else {
        return obj;
      }
    } ) );
  }

  const result = arrObj.map( obj => {
    return <p key={obj.id}>
      { obj.prop1 } { obj.prop2 } { obj.prop3 }
      <br/>
      <button onClick={() => delObj(obj.id)}>удалить объект</button>
      <br/>
      <button onClick={() => getValue(obj.id)}>редактировать текущий объект</button>
    </p>
  } );

  return (
  <div className={classes.app}>
    <h2 className={classes.title}>CSS Module Inputs</h2>
    <div className={classes.wrapper}>
      <Inputs />
    </div>
    <br/>
    {result}
    <br/>
    <div>ввод данных нового оъекта</div>
    <input value={obj.prop1} onChange={event => change('prop1', event)} />
    <input value={obj.prop2} onChange={event => change('prop2', event)} />
    <input value={obj.prop3} onChange={event => change('prop3', event)} />
    <br/>
    <button onClick={add}>добвить объект</button>
    <br/>
    <br/>
    <div>редактирование данных существующего объекта</div>
    <input value={getValue('prop1')} onChange={event => change('prop1', event)} />
    <input value={getValue('prop2')} onChange={event => change('prop2', event)} />
    <input value={getValue('prop3')} onChange={event => change('prop3', event)} />
  </div>
  );
}

export default App;