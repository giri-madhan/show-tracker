import { SpinnerDiamond, SpinnerCircularSplit, SpinnerRound } from 'spinners-react'

const Spinner = (props) => {

    const defaultProps = {
        color: '#dfd',
        secondaryColor: '#313131',
        speed: 200,
        thickness: 35,
        size: 250
    }

    switch (props.type) {
        case 'circle':
            return <SpinnerCircularSplit {...defaultProps} {...props} />    
        case 'diamond':
            return <SpinnerDiamond {...defaultProps} {...props} />    
        default:
            return <SpinnerRound {...defaultProps} {...props} />    
    }
}

export default Spinner