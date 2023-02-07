import {useState} from 'react'
import Modal from 'react-modal'
import LogoutButton from '../../Buttons/LogoutButton'

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
            <Modal shouldCloseOnOverlayClick={true} isOpen={userModalOpen} className={`user-menu-modal ${userModalOpen ? 'transition-open' : null}`} overlayClassName='user-menu-modal-overlay' ariaHideApp={false}>
                <LogoutButton />
            </Modal>
        </div>
    )
}

export default UserMenu