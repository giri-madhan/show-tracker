import { applyMiddleware } from '@reduxjs/toolkit'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from './DashHeader/DashHeader'

const getMovies = () => {
  
}

const Dashboard = () => {
    const {count} = useSelector(state => state.counter)
    return(
        <div className='dash-container'>
          <DashHeader />
          <input type='text' placeholder='search'/>
          <button onClick={() => console.log('hello')}>Go</button>
        </div>
    )
}

export default Dashboard