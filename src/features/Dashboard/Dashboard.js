import React, {useEffect, useState} from 'react'
import View from './MainView/View'
import {useSelector, useDispatch} from 'react-redux'
import {getMPs} from '../../redux/shows'
import {addItem, getWLIs} from '../../redux/watchlist'


import SearchContainer from './Search/SearchContainer'

//TODO Refresh component when movie added to watchList
//TODO Refresh component when movie added to watched
//TODO Send toast when adding, deleting, and moving movies
//TODO Add scrolling all containers as necessary
//TODO Update UI with all components
//TODO Check UI for responsiveness, add breakpoints as needed
//TODO Clean up unsed code
//TODO lazy loading


const Dashboard = () => {

    const [mps, setMPs] = useState([])
    const [wlis, setWLIs] = useState([])
    const showRedux = useSelector(state => state.mps)
    const {list, isLoading} = useSelector(state => state.wlis)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getMPs())
      dispatch(getWLIs())
    }, [])

    const addToRedux = (r) => {
      dispatch(addItem(r))
    }

    return(
        <div className='dash-container'>
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            {/* NORMAL */}
            {/* <SearchContainer wlData={wlis} /> */}
            {/* <View mpData={mps} wlData={wlis} /> */}
            {/* REDUX */}
            <SearchContainer wlData={list} add={addToRedux} />
            <View mpData={showRedux.list} wlData={list} isLoading={isLoading} />
          </div>
        </div>
    )
}

export default Dashboard