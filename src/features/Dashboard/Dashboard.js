import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from './DashHeader/DashHeader'
import axios from 'axios'
import WatchedEntryContainer from '../View/WatchedList/WatchedEntryContainer'
import SearchContainer from './Search/SearchContainer'
import CreateContainer from './Create/CreateContainer'
import View from '../View/View'



const Dashboard = () => {
    const [view, setView] = useState('view')
    const [mps, setMPs] = useState([])

    useEffect(() => {
      axios.get('/api/getMP').then(res => setMPs(res.data))
    }, [])

    return(
        <div className='dash-container'>
          <DashHeader setDashView={setView} />
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer />
            {view === 'view' ? <View mpData={mps} /> : null}
            {view === 'add' ? <CreateContainer /> : null}
          </div>
        </div>
    )
}

export default Dashboard