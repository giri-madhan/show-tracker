import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashHeader from './DashHeader/DashHeader'
import axios from 'axios'

const getMovies = () => {
  axios.get('https://api.themoviedb.org/3/movie/550?api_key=4524058d1b58bdbc0fa9f7631e0d6e02').then(res => console.log(res))
}

const Dashboard = () => {
    const {count} = useSelector(state => state.counter)
    const [view, setView] = useState('search')

    return(
        <div className='dash-container'>
          <DashHeader setDashView={setView} />
          {view === 'search' ? <div>Search Component</div> : null}
          {view === 'view' ? <div>View Component</div> : null}
          {view === 'add' ? <div>Add Component</div> : null}
          <input type='text' placeholder='search'/>
          <button onClick={() => getMovies()}>Go</button>
        </div>
    )
}

export default Dashboard