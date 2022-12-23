import React, {useEffect, useState} from 'react'
import View from './MainView/View'
import {useSelector, useDispatch} from 'react-redux'
import {addItem, getWLIs} from '../../redux/watchlist'
import data from '../../database/fakeData'


import SearchContainer from './Search/SearchContainer'

const Dashboard = () => {

    const [viewDisplay, setViewDisplay] = useState('watchList')
    const showRedux = useSelector(state => state.mps)
    const {list, isLoading} = useSelector(state => state.wlis)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatchWLIs()
    }, [])

    const dispatchWLIs = () => {
      dispatch(getWLIs())
    }

    const addToRedux = (r) => {
      dispatch(addItem(r))
    }

    return(
        <div className='dash-container'>
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer 
              wlData={list} 
              addToRedux={addToRedux} 
              getWLIs={dispatchWLIs} 
              viewDisplay={viewDisplay}
              setViewDisplay={setViewDisplay}  
            />
            <View 
              mpData={showRedux.list} 
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