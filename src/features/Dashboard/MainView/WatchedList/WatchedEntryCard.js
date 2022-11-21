import React from 'react'
import defaultPoster from '../../../../icons/default_poster.jpg'

const WatchedEntryCard = ({mp}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    
    return(
        <>
            <div className='robust-watched-entry-card'>
                <div style={{width:66}}>
                    <img src={mp.photo ? posterPath+mp.photo : defaultPoster} 
                        alt={`${mp.name}`}
                        width={66} 
                        style={{borderRadius: '5px 0 0 5px'}} />
                </div>
                <div style={{flex: 4, minWidth: 250}}>
                    <div style={{fontSize: 27, color: 'rgb(241, 100, 100)', marginTop: 7}}>
                        {mp.name}
                        <span style={{color: '#aaa', marginLeft: 20, fontSize: 20}}>{`(${mp.releaseDate.substring(0,4)})`}</span>
                    </div>
                    <div style={{marginTop: 15}}>
                        {mp.genre}
                    </div>
                    <div>
                        {mp.duration} mins
                    </div>
                </div>
                <div className='c' style={{flex: 1}}>{mp.watchDate}</div>
                <div className='c' style={{fontSize: 40, flex: 1, height: '100%'}}>
                    <div>{mp.rating}/10</div>
                </div>
            </div>
        </>
    )
}

export default WatchedEntryCard