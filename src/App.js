import './App.css'
import React, {useState, useEffect} from 'react'
import Home from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './features/Landing/Landing';
import { useAuth0 } from '@auth0/auth0-react'

//TODO Accounts or public/private at least
//TODO Mobile View
//TODO Add scrolling all containers as necessary+
//TODO Check UI for responsiveness, add breakpoints as needed
//TODO Clean up unused code
//TODO lazy loading
//TODO (OPTIONAL) Add a different way to visualize watched entries...chart with genre / ratings / duration etc?
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
