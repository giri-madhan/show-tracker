import './App.css'
import React from 'react'
import Home from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

//TODO Watched List Filters / Reverse Order
//TODO Image rendering problem
//TODO Change conditionally render after adding comment
//TODO tabIndex -1 on clear search btn
//TODO Accounts or public/private at least
//TODO (OPTIONAL) Add a different way to visualize watched entries


function App() {
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
      <Home />
    </div>
  );
}

export default App;
