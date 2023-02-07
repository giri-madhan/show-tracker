import React, {useEffect, useState} from 'react'
import View from './MainView/View'
import {useSelector, useDispatch} from 'react-redux'
import {addItem, getWLIs} from '../../redux/watchlist'
import { getMPs } from '../../redux/shows'
import data from '../../database/fakeData'


import SearchContainer from './Search/SearchContainer'

const Dashboard = () => {

    const [viewDisplay, setViewDisplay] = useState('watchList')
    const watchedList = useSelector(state => state.mps)
    const {list, isLoading} = useSelector(state => state.wlis)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getWLIs())
      dispatch(getMPs())
    }, [])

    const addToRedux = (r) => {
      dispatch(addItem(r))
    }

    return(
        <div className='dash-container'>
          <div className='dash-container-inner' style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer 
              wlData={list} 
              addToRedux={addToRedux} 
              getWLIs={() => dispatch(getWLIs())} 
              viewDisplay={viewDisplay}
              setViewDisplay={setViewDisplay}  
            />
            <View 
              mpData={watchedList.list} 
              wlData={list || data} 
              isLoading={isLoading} 
              viewDisplay={viewDisplay} 
              setViewDisplay={setViewDisplay} 
              />
          </div>
        </div>
    )
}

export default Dashboard