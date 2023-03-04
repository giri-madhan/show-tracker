import {useState} from 'react'
import Modal from 'react-modal'
import LogoutButton from '../../Buttons/LogoutButton'
import { useAuth0 } from '@auth0/auth0-react'

const UserMenu = (props) => {
    const {user} = useAuth0()
    const getInitials = () => {
        const firstInitial = user?.given_name?.slice(0,1)
        const lastInitial = user?.family_name?.slice(0,1)

        return firstInitial + lastInitial
    }

    const [userModalOpen, setUserModalOpen] = useState(false)


    return (
        <div 
            className='user-menu-icon' 
            style={userModalOpen ? {background: '#9FE2BF', color: '#313131'} : null} 
            onClick={() => setUserModalOpen(!userModalOpen)}
        >
            {user?.picture ? (
                <img src={user.picture} width={50} height={50} style={{borderRadius: 50}} alt='' />
            ) : (
                <div>
                    {getInitials() || 'P'}
                </div>
            )}
            <Modal shouldCloseOnOverlayClick={true} isOpen={userModalOpen} className={`user-menu-modal ${userModalOpen ? 'transition-open' : null}`} overlayClassName='user-menu-modal-overlay' ariaHideApp={false}>
                <LogoutButton />
            </Modal>
        </div>
    )
}

export default UserMenu