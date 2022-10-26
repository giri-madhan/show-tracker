import React, {useEffect, useState} from 'react'
import View from './MainView/View'
import {useSelector, useDispatch} from 'react-redux'
import {getMPs} from '../../redux/shows'
import {addItem, getWLIs} from '../../redux/watchlist'


import SearchContainer from './Search/SearchContainer'

//TODO Refresh component when movie added to watched
//TODO Send toast when adding, deleting, and moving movies
//TODO Add scrolling all containers as necessary+
//TODO Check UI for responsiveness, add breakpoints as needed
//TODO Clean up unused code
//TODO lazy loading


const Dashboard = () => {

    const [mps, setMPs] = useState([])
    const [wlis, setWLIs] = useState([])
    const showRedux = useSelector(state => state.mps)
    const {list, isLoading} = useSelector(state => state.wlis)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatchMPs()
      dispatchWLIs()
    }, [])

    const dispatchWLIs = () => {
      dispatch(getWLIs())
    }

    const dispatchMPs = () => {
      dispatch(getMPs())
    }

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
            <SearchContainer wlData={list} add={addToRedux} getWLIs={dispatchWLIs} />
            <View mpData={showRedux.list} wlData={list} isLoading={isLoading} />
          </div>
        </div>
    )
}

export default Dashboard