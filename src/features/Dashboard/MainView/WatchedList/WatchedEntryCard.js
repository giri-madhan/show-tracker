import React, {useState} from 'react'
import defaultPoster from '../../../../icons/default_poster.jpg'
import formatDate from '../../../../utils/formatDate'

const WatchedEntryCard = ({mp}) => {
    const posterPath = 'https://image.tmdb.org/t/p/original'
    const [imgLoaded, setImgLoaded] = useState(false)
    const [mpImg, setMpImg] = useState('')

    const formatRatingStyle = () => {
        if (mp.rating) {
            if (mp.rating === 10) return 'rgb(0, 255, 0)'
            if (mp.rating === 9) return 'rgb(50, 240, 0)'
            if (mp.rating === 8) return 'rgb(100, 220, 0)'
            if (mp.rating === 7) return 'rgb(150, 200, 0)'
            if (mp.rating === 6) return 'rgb(200, 180, 0)'
            if (mp.rating === 5) return 'rgb(250, 160, 0)'
            if (mp.rating < 5) return 'rgb(255, 0, 0)'
        }
    }
    
    return(
        <>
            <div className='robust-watched-entry-card'>
                <div style={{width:66}}>
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
                <div className='c' style={{flex: 1}}>{formatDate(mp.watchDate)}</div>
                <div className='c' style={{fontSize: 40, flex: 1, height: '100%'}}>
                    <div style={{color: formatRatingStyle()}}>{mp.rating}/10</div>
                </div>
            </div>
        </>
    )
}

export default WatchedEntryCard