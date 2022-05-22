import './App.css';
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement, incrementByAmount} from './redux/counter'


function App() {
  const {count} = useSelector(state => state.counter)
  //const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      Show Tracker
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(22))}>+22</button>
    </div>
  );
}

export default App;
