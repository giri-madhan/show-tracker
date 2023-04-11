import React, {useState} from 'react'
import defaultPoster from '../../../../icons/default_poster.jpg'
import formatDate from '../../../../utils/formatDate'
import formatRatingStyle from '../../../../utils/formatRatingStyle'

const WatchedEntryCard = ({mp}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const [imgLoaded, setImgLoaded] = useState(false)
    const [mpImg, setMpImg] = useState('')
    
    return(
        <>
            <div className='robust-watched-entry-card'>
                <div>
                    <img src={mp.photo !== null && imgLoaded ? mpImg : defaultPoster} 
                        alt={`${mp.name}`}
                        width={66} 
                        style={{borderRadius: '5px 0 0 5px'}} 
                        onLoad={() => {
                            setImgLoaded(true)
                            setMpImg(posterPath + mp.photo)
                        }}
                    />
                </div>
                <div id='watched-entry-info-container'>
                    <div id='watched-entry-title'>
                        <span>
                            {mp.name}
                        </span>
                        <span style={{color: '#aaa', marginLeft: 20}}>
                            {`(${mp.releaseDate?.substring(0,4)})`}
                        </span>
                    </div>
                    <div style={{marginTop: 15}} id='watched-entry-genres'>
                        {mp.genre?.split(',')?.slice(0,3)?.join(',')}
                    </div>
                    <div id='watched-entry-duration'>
                        {mp.duration} mins
                    </div>
                </div>
                <div id='watched-entry-dateRating' className='center' style={{height:'100%', fontSize: 'clamp(14px, 2vw, 40px)'}}>
                    <span style={{marginRight: 10}}>
                        {formatDate(mp.watchDate)}
                    </span>
                    <span style={{color: formatRatingStyle(mp.rating)}}>{mp.rating}/10</span>
                </div>
            </div>
        </>
    )
}

export default WatchedEntryCard