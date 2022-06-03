import React from 'react'


const WatchedEntryCard = (props) => {
    console.log(props)
    return(
        <div className='watched-entry-card' style={{display: 'flex'}}>
            <div style={{width: '40%', height: '100%', display: 'flex', flexDirection: 'column', background: '#063', borderRadius: '15px 0 0 15px'}}>
                <div style={{fontWeight: 700, fontSize: 20}}>
                    {props.mp.name}
                </div>
                <div>
                    {props.mp.rating}
                </div>
            </div>
            <div style={{width: '60%', height: '100%', display: 'flex', flexDirection: 'column', background: '#663', borderRadius: '0 15px 15px 0'}}>
                <div>
                    Genre: {props.mp.genre}
                </div>
                <div>
                    Watch Count: {props.mp.watchCount}
                </div>
                <div>
                    Watch Date: {props.mp.watchDate}
                </div>
            </div>
            
        </div>
    )
}

export default WatchedEntryCard