import './App.css'
import React, {useState, useEffect} from 'react'
import Home from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './features/Landing/Landing';

//TODO Accounts or public/private at least
//TODO Fix fail toast for already in watch list
//TODO Mobile View
//TODO Color-code watched entry rating
//TODO (OPTIONAL) Add a different way to visualize watched entries
//TODO (Optional) Watched List Filters / Reverse Order

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
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
      { !loggedIn ? <Home /> : <LandingPage />}
    </div>
  );
}

export default App;
