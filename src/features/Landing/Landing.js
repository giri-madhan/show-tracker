import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import backgroundImg from '../../icons/pxfuel.jpg'

const LandingPage = () => {
    //TODO Add background
    const {loginWithRedirect} = useAuth0()

    const authenticate = (e) => {
        e.preventDefault()
        loginWithRedirect()
    }

return(
    <div 
        className='center' 
        style={{
            width: '100vw', 
            height: '100%', 
            flexDirection: 'column',
            backgroundImage: `url(${backgroundImg})`
        }}
    >
        <div style={{fontSize: 40, color: '#fff', marginBottom: 20}}>MW Movie Tracker</div>
        <button className='auth-btn' onClick={authenticate}>Authenticate</button>
    </div>
)
}

export default LandingPage