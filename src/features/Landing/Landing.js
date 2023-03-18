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
            style={{
                fontSize: 40, 
                color: '#ccc', 
                marginBottom: 20, 
                zIndex: 1,
                display: 'flex', 
                background: '#000',
                borderRadius: 15,
                flexDirection: 'column',
                height: 250
            }}
        >
            <div style={{background: '#6d1e20', padding: 10, borderRadius: '15px 15px 0 0'}}>
                MW Movie Tracker
            </div>
            <div className='center' style={{height: '100%', gap: 10, flexDirection: 'column'}}>
                <button className='auth-btn' onClick={authenticate}>Login</button>
                <button 
                    className='create-acct-btn'
                    onClick={authenticate}>
                    Create Account
                </button>
            </div>
        </div>
    </div>
)
}

export default LandingPage