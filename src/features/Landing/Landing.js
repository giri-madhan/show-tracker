import React, {useState, useEffect} from 'react'

const LandingPage = () => {
    const [creds, setCreds] = useState({username: '', password: ''})

    const login = (e) => {
        e.preventDefault()
    }

    const onChange = (e) => {
        setCreds(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const inputStyle = {width: 200, height: 50, borderRadius: 12, border: 'none'}

return(
    <div className='c' style={{width: '100vw', height: '100%', background: '#222', flexDirection: 'column'}}>
        <div style={{fontSize: 40, color: '#fff'}}>MW Movie Tracker</div>
        <form onSubmit={login} style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            <input style={inputStyle} type='text' placeholder='Username' name='username' value={creds.username} onChange={onChange} />
            <input style={inputStyle} type='password' placeholder='Password' name='password' value={creds.pw} onChange={onChange} />
            <input className='login' type='submit' />
        </form>
        
    </div>
)
}

export default LandingPage