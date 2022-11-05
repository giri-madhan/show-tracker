import { SpinnerDiamond, SpinnerCircularSplit, SpinnerRound } from 'spinners-react'

const Spinner = (props) => {
    switch (props.type) {
        case 'circle':
            return <SpinnerCircularSplit size={250} color='#dfd' secondaryColor='#313131' speed={200} thickness={35} {...props} />    
        case 'diamond':
            return <SpinnerDiamond size={250} color='#dfd' secondaryColor='#313131' speed={200} thickness={35} {...props} />    
        default:
            return <SpinnerRound size={250} color='#dfd' secondaryColor='#313131' speed={200} thickness={35} {...props} />    
    }
}

export default Spinner