import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LandingPage = () => {
    //TODO Add background
    const {loginWithRedirect} = useAuth0()

    const authenticate = (e) => {
        e.preventDefault()
        loginWithRedirect()
    }

return(
    <div className='c' style={{width: '100vw', height: '100%', background: '#222', flexDirection: 'column'}}>
        <div style={{fontSize: 40, color: '#fff', marginBottom: 20}}>MW Movie Tracker</div>
        <button style={{height: 80, width: 200, borderRadius: 12, background: '#9FE2BF'}} onClick={authenticate}>Authenticate </button>
        
    </div>
)
}

export default LandingPage