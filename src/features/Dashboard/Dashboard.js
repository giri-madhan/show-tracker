import React, {useEffect, useState} from 'react'
import View from './MainView/View'
import {useSelector, useDispatch} from 'react-redux'
import {addItem, getWLIs} from '../../redux/watchlist'
import { getMPs } from '../../redux/shows'


import SearchContainer from './Search/SearchContainer'

const Dashboard = () => {

    const [viewDisplay, setViewDisplay] = useState('watchList')
    const watchedList = useSelector(state => state.mps)
    const {list, isLoading} = useSelector(state => state.wlis)
    const user = useSelector(state => {
      return state.user.user
    })

    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getWLIs(user?.user_id))
      dispatch(getMPs(user?.user_id))
    }, [user])

    const addToRedux = (r) => {
      dispatch(addItem(r))
    }

    return(
        <div className='dash-container'>
          <div className='dash-container-inner' style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer 
              wlData={list[0]?.watchList?.data || []} 
              addToRedux={addToRedux} 
              getWLIs={() => dispatch(getWLIs(user?.user_id))} 
              viewDisplay={viewDisplay}
              setViewDisplay={setViewDisplay}  
            />
            <View 
              mpData={watchedList.list[0]?.watchedList?.data || []} 
              wlData={list[0]?.watchList?.data || []} 
              isLoading={isLoading} 
              viewDisplay={viewDisplay} 
              setViewDisplay={setViewDisplay} 
              />
          </div>
        </div>
    )
}

export default Dashboard