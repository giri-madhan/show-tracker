import React from 'react'
import defaultPoster from '../../../../icons/default_poster.jpg'


const WatchedEntryCard = ({mp, cardView}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    return(
        <>
            {cardView === 'robust' ? (
            <div className='robust-watched-entry-card'>
                <div style={{width:66}}>
                    <img src={mp.photo ? posterPath+mp.photo : defaultPoster} 
                        alt={`${mp.name}`}
                        width={66} 
                        style={{borderRadius: '5px 0 0 5px'}} />
                </div>
                <div style={{width:'50%', minWidth: 250}}>
                <div style={{fontSize: 27, color: '#fff'}}>
                    {mp.name}
                    <span style={{color: '#aaa', marginLeft: 20, fontSize: 20}}>{`(${mp.releaseDate.substring(0,4)})`}</span>
                </div>
                    <div style={{marginTop: 15}}>{mp.genre}</div>
                    <div>{mp.duration} mins</div>
                </div>    
                <div style={{fontSize: 40, width:'40%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div>{mp.rating}/10</div>
                </div>
            </div>
            ) : (
                <div className='minimal-watched-entry-card'>
                    <span style={{fontSize: 25, color: '#fff', marginLeft: 5}}>{mp.name}</span>
                    <span>{mp.releaseDate.substring(0,4)}</span>
                    <span>{mp.genre}</span>
                    <span style={{
                        fontSize: 25, 
                        color: '#cff', 
                        fontWeight: 700,     
                        borderLeft: '3px solid #aa00ff',
                        padding: 5,
                        paddingLeft: 13
                    }}>
                        {mp.rating}
                    </span>
                </div>
            )}
        </>
    )
}

export default WatchedEntryCard