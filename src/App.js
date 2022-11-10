import './App.css'
import React from 'react'
import Home from './features/Dashboard/Dashboard'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={2001}
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
