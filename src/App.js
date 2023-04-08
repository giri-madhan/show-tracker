import './App.css'
import React from 'react'
import Dashboard from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './features/Landing/Landing';
import { useAuth0 } from '@auth0/auth0-react'

//TODO Accounts or public/private at least -> guest data or separate accounts
//TODO Add profile page, nest buttons inside dropdown w/ email/name/img as icon
//TODO add to top button on wl, watched
//TODO if movie exists in watched, let user choose to add again; watchCount + 1 instead of new watched instance?
//TODO Clean up unused code
//TODO convert class components to func components
//TODO lazy loading
//TODO Add a different way to visualize watched entries...chart with genre / ratings / duration etc? chartjs or my own + animation
//TODO (Optional) Watched List Filters / Reverse Order
//TODO (Optional) Use gpt to suggest movies

function App() {
  const {loginWithRedirect, user, isAuthenticated} = useAuth0()
  //console.log('user', user)

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
