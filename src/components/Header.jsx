import { RiShutDownLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../services/api'
import { useAuth } from '../hooks/auth'

import avatarPlaceholder from '../assets/avatar_placeholder.svg'

function Header() {
    const { signOut, user } = useAuth()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder


    const navigate = useNavigate()//

    function handleSignOut() {
        navigate('/')        
        signOut()
    }

    return (
        <div className="h-[105px] w-full border-b border-solid border-t-0 border-x-0 border-BACKGROUND_700 flex justify-between items-center pt-0 px-20">

            <Link to="/profile">
                <div className="flex items-center">
                    <img 
                        src={avatarURL} 
                        alt={user.name}
                        className=" w-14 h-14 rounded-full"
                    />

                    <div className="flex flex-col ml-4 leading-6">
                        <span className="text-sm text-GRAY_100">Bem vindo(a)</span>
                            <strong className=" text-lg text-WHITE">{user.name}</strong>
                    </div>

                </div>
            </Link>

            <button 
                onClick={handleSignOut}
                className=' border-none bg-transparent w-9 h-9'
            >
                <RiShutDownLine className=' text-GRAY_100 text-4xl' />                
            </button>
        </div>
    )
}

export { Header }
