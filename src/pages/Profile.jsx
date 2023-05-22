import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"

import { api } from '../services/api'
import { useAuth } from '../hooks/auth'

import avatarPlaceholder from '../assets/avatar_placeholder.svg'
import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [newPassword, setNewPassword] = useState()
    const [oldPassword, setOldPassword] = useState()

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder

    const [avatar, setAvatar] = useState(avatarURL)
    const [avatarFile, setAvatarFile] = useState(null)

    const navigate = useNavigate()

    async function handleUpdateProfile() {
        const Updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, Updated) //this will mantain the avatar in the localStorange of the brownser 

        await updateProfile({ user: userUpdated, avatarFile })
    }

    async function handleChangeAvatar(event) {
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    function handleBack() {
        navigate(-1)
    }

    return (
        <div className=" w-screen h-screen text-center relative">
            <div title="bg-header" className=" text-GRAY_100 bg-BACKGROUND_900 -z-10 absolute w-full h-36">
            </div>

            <div title="content" className=" w-full flex flex-col items-center">
                <button 
                    onClick={handleBack}
                    className="w-6 h-6 flex flex-col items-center justify-center my-[60px] ml-36 absolute left-0"
                >
                    <FiArrowLeft className=" w-6 h-6"    />
                </button>

                <div title="profileImg" className=" mt-12">
                    <div title="Avatar" className="relative w-48 h-48">
                        <img
                            src={avatar}
                            alt={name}
                            className=" w-48 h-48 rounded-full absolute"
                        />
                        <label 
                            htmlFor="avatar"
                            className=" bg-ORANGE w-12 h-12 rounded-full text-BACKGROUND_800 flex justify-center items-center absolute bottom-2 right-2 cursor-pointer">
                            <FiCamera className=" w-5 h-5"></FiCamera>

                            <input 
                                type="file" 
                                id="avatar" 
                                className=" hidden" 
                                onChange={handleChangeAvatar}
                            />
                        </label>
                    </div>
                </div>

                <div className=" mt-12 w-[340px]">
                    <Input 
                        placeholder="Nome" 
                        icon={FiUser} 
                        type="text"  
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input 
                        placeholder="E-mail" 
                        icon={FiMail} 
                        type="email"   
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>

                <div className="mt-6 w-[340px]">
                    <Input 
                        placeholder="Senha atual" 
                        icon={FiLock} 
                        type="password"  
                        onChange={event => setOldPassword(event.target.value)}
                    />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input 
                        placeholder="Nova Senha" 
                        icon={FiLock} 
                        type="password" 
                        onChange={event => setNewPassword(event.target.value)}
                    />
                </div>

                <div className="mt-6 w-[340px]">
                    <Button 
                        title="Salvar" 
                        onClick={handleUpdateProfile}
                    />
                </div>

            </div>
        </div>
    )
}