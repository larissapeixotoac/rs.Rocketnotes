import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { FiMail, FiLock, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <div className=" w-screen h-screen text-center relative">
            <div title="bg-header" className=" text-GRAY_100 bg-BACKGROUND_900 -z-10 absolute w-full h-36">
            </div>

            <div title="content" className=" w-full flex flex-col items-center">
                <Link to="/" className="w-6 h-6 flex flex-col items-center justify-center my-[60px] ml-36 absolute left-0">
                    <FiArrowLeft className=" w-6 h-6"    />
                </Link>

                <div title="profileImg" className=" mt-12">
                    <div title="Avatar" className="relative w-48 h-48">
                        <img
                            src="https://github.com/larissapeixotoac.png"
                            alt="Foto do usuário"
                            className=" w-48 h-48 rounded-full absolute"
                        />
                        <label 
                            htmlFor="avatar"
                            className=" bg-ORANGE w-12 h-12 rounded-full text-BACKGROUND_800 flex justify-center items-center absolute bottom-2 right-2 cursor-pointer">
                            <FiCamera className=" w-5 h-5"></FiCamera>

                            <input type="file" id="avatar" className=" hidden" />
                        </label>
                    </div>
                </div>

                <div className=" mt-12 w-[340px]">
                    <Input placeholder="Nome" icon={FiUser} type="text"  />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input placeholder="E-mail" icon={FiMail} type="email"   />
                </div>

                <div className="mt-6 w-[340px]">
                    <Input placeholder="Senha atual" icon={FiLock} type="password"  />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input placeholder="Nova Senha" icon={FiLock} type="password" />
                </div>

                <div className="mt-6 w-[340px]">
                    <Button title="Salvar" />
                </div>

            </div>
        </div>
    )
}