

const StatsCard = (props) => {

    const generateData = () => {
        // if typeof props.data === ob, === arr === str

        return props.data
    }

    return(
        <div className='stats-card'>
            <div className='stat'>
                <span className='stat-title'>
                    {props.title}
                </span>
                <span className='stat-info'>
                    <span className='stat-info-text' style={{...props.formatStyle}}>
                        {generateData()}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default StatsCard