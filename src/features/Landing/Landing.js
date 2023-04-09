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
            id='splashBackground'
            style={{
                backgroundImage: `url(${backgroundImg})`
            }}
        />
        <div className='auth-container'>
            <div className='center' style={{background: 'rgba(255, 0, 0, 0.4)', padding: 10, borderRadius: '15px 15px 0 0'}}>
                MW Movie Tracker
            </div>
            <div style={{ gap: 10, flexDirection: 'column', display: 'flex', marginTop: 10, alignItems: 'center'}}>
                <button className='auth-btn' onClick={authenticate}>Login</button>
                <div style={{fontSize: 14}}>
                    <span>
                        Don't have an account?
                    </span>
                    <div style={{marginLeft: 5}}>
                        <button 
                            style={{
                                background: 'none', 
                                color: '#AAA6E3',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            onClick={authenticate}
                        >
                            Create one here!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default LandingPage