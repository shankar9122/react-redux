import React from 'react';
import './App.css';
import { incNumber, decNumber, divNumber, mulNumber } from './Actions/Action'
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const multiState = useSelector((state) => state.multTheNumber);
  const dispach = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Increment/Decrement Counter</h1>
        <h3>Using React Redux</h3>

        <div className="quantity">
          <button className="quantity__minus" onClick={() => dispach(decNumber())}>-</button>
          <input type="text" className="quantity__input" value={myState} name="quantity" />
          <button className="quantity__plus" onClick={() =>dispach(incNumber(5))}>+</button>
        </div>
      </div>

      <div className="container">
        <h1>Multiplay/Division Counter</h1>
        <h3>Using React Redux</h3>

        <div className="quantity">
          <button className="quantity__plus" onClick={() =>dispach(divNumber(5))}>/</button>
          <input type="text" className="quantity__input" value={multiState} name="quantity" />
          <button className="quantity__minus" onClick={() => dispach(mulNumber(5))}>*</button>
        </div>
      </div>
    </>
  );
}

export default App;
