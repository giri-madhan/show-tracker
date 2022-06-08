import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from './DashHeader/DashHeader'
import axios from 'axios'
import WatchedEntryContainer from '../View/WatchedList/WatchedEntryContainer'
import SearchContainer from './Search/SearchContainer'
import CreateContainer from './Create/CreateContainer'
import View from '../View/View'

//TODO Refresh component when movie added to watchList
//TODO Refresh component when movie added to watched
//TODO Send toast when adding, deleting, and moving movies
//TODO Add scrolling all containers as necessary
//TODO Update UI with all components
//TODO Check UI for responsiveness, add breakpoints as needed
//TODO Clean up unsed code
//TODO lazy loading


const Dashboard = () => {
    const [view, setView] = useState('view')
    const [mps, setMPs] = useState([])
    const [wlis, setWLIs] = useState([])

    useEffect(() => {
      axios.get('/api/getMP').then(res => setMPs(res.data))
      axios.get('/api/getWLI').then(res => setWLIs(res.data))
    }, [])

    return(
        <div className='dash-container'>
          <DashHeader setDashView={setView} />
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer />
            {view === 'view' ? <View mpData={mps} wlData={wlis} /> : null}
            {view === 'add' ? <CreateContainer /> : null}
          </div>
        </div>
    )
}

export default Dashboard