import './App.css'
import React, {useState, useEffect} from 'react'
import Home from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './features/Landing/Landing';
import { useAuth0 } from '@auth0/auth0-react'

//TODO Accounts or public/private at least -> guest data or separate accounts
//TODO Mobile / Responsive View
//TODO if on watched list and add movie to WL, change view to WL
//TODO add to top button on wl, watched
//TODO if movie exists in watched, let user choose to add again; watchCount + 1 instead of new watched instance?
//TODO Clean up unused code
//TODO convert class components to func components
//TODO lazy loading
//TODO refactor weCard setState logic for data object....dont need state here
//TODO Add a different way to visualize watched entries...chart with genre / ratings / duration etc? chartjs or my own + animation
//TODO (Optional) Watched List Filters / Reverse Order

function App() {
  const {loginWithRedirect, user, isAuthenticated} = useAuth0()

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
      { isAuthenticated ? <Home /> : <LandingPage />}
    </div>
  );
}

export default App;
