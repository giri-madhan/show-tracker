import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from './DashHeader/DashHeader'
import axios from 'axios'
import EntryContainer from './Entries/EntryContainer'
import SearchContainer from './Search/SearchContainer'
import CreateContainer from './Create/CreateContainer'

const getMovies = () => {
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=4524058d1b58bdbc0fa9f7631e0d6e02').then(res => console.log(res))
}

const Dashboard = () => {
    const {count} = useSelector(state => state.counter)
    const [view, setView] = useState('search')

    return(
        <div className='dash-container'>
          <DashHeader setDashView={setView} />
          <div style={{display: 'flex', height: '100%', width: '100%'}}>
            <SearchContainer />
            {view === 'view' ? <EntryContainer /> : null}
            {view === 'add' ? <CreateContainer /> : null}
          </div>
          
          <input type='text' placeholder='search'/>
          <button onClick={() => getMovies()}>Go</button>
        </div>
    )
}

export default Dashboard