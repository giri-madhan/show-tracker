import './App.css'
import React from 'react'
import Dashboard from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LandingPage from './features/Landing/Landing'
import { useAuth0 } from '@auth0/auth0-react'
import {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './redux/user'

//TODO Remove api key and get new ones before launch
//TODO if movie exists in watched, let user choose to add again; watchCount + 1 instead of new watched instance?
//TODO lazy loading
//TODO Add a different way to visualize watched entries...chart with genre / ratings / duration etc? chartjs or my own + animation
//TODO (Optional) Watched List Filters / Reverse Order
//TODO (Optional) Use gpt to suggest movies

function App() {
  const {user, isAuthenticated} = useAuth0()
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  
  useEffect(() => {
    if (user?.sub) {
      axios({
        method: 'POST',
        url: '/api/getUser',
        data: {
          userId: user.sub
        }
      }).then(res => {
        if (Object.keys(res.data).length) {
          // if a user exists with that id
          dispatch(addUser(res.data))
        } else {
          //create user in db and dispatch data for res.data
          axios({
            method: 'POST',
            url: '/api/createUser',
            data: {
              user
            }
          }).then(res => {
            dispatch(addUser(res.data))
          })
        }
      })
    }
  }, [user])

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      { isAuthenticated ? <Dashboard /> : <LandingPage />}
    </div>
  );
}

export default App;
