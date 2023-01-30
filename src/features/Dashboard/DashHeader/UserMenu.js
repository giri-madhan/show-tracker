import {useEffect, useState} from 'react'
import Modal from 'react-modal'
import LogoutButton from '../../Buttons/LogoutButton'
import DashFilterModal from './DashFilterModal'

const UserMenu = (props) => {
    const {
        user = {
            email: '',
            name: ''
        }
    } = props

    const [userModalOpen, setUserModalOpen] = useState(false)


    return (
        <div 
            className='user-menu-icon' 
            style={userModalOpen ? {background: '#9FE2BF', color: '#313131'} : null} 
            onClick={() => setUserModalOpen(!userModalOpen)}
        >
            {user.name || 'MW'}
            <Modal isOpen={userModalOpen} className='user-menu-modal' overlayClassName='user-menu-modal-overlay' ariaHideApp={false}>
                <LogoutButton />
            </Modal>

        </div>
    )
}

export default UserMenu