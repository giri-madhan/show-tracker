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
            flexDirection: 'column'
        }}
    >
        <div 
            style={{
            width: '100vw', 
            height: '100%', 
            position: 'absolute', 
            filter: 'brightness(0.2)', 
            backgroundImage: `url(${backgroundImg})`}}
        />
        <div 
            className='center' 
            style={{
                fontSize: 40, 
                color: '#fff', 
                marginBottom: 20, 
                zIndex: 1,
                display: 'flex', 
                background: '#111',
                padding: 40,
                borderRadius: 5,
                flexDirection: 'column',
                gap: 10
            }}
        >
            <span>MW Movie Tracker</span>
            <button className='auth-btn' onClick={authenticate}>Authenticate</button>
        </div>
    </div>
)
}

export default LandingPage