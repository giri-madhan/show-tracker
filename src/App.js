import './App.css'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment, decrement, incrementByAmount} from './redux/counter'
import {logState} from './redux/shows'
import Home from './features/Dashboard/Dashboard'

//save show information page form
//view + filter entries (name, releaseD, dateW, rating, notes, watchC)
//search movies and shows page + add to watchlist
//login



function App() {
  const {count} = useSelector(state => state.counter)

  //const count = useSelector(state => state.counter.count)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <button onClick={() => dispatch(logState())}>Log</button>

      
      {/* <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incrementByAmount(22))}>+22</button> */}
      <div>{count}</div>
      <Home />
    </div>
  );
}

export default App;
