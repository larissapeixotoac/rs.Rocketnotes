import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { ButtonText } from "../components/ButtonText"
import { Title } from "../components/Title"
import { Label } from "../components/Label"
import { Link } from 'react-router-dom'
import { FiMail, FiLock, FiUser } from "react-icons/fi"

export function SignUp() {
    return (
        <div title="Container" className="flex flex-row w-screem h-screen justify-end">

            <div title="Cover" className="bg-backgroundImg flex-1 bg-no-repeat bg-center bg-cover opacity-20">   
            </div>            

            <div title="SignUn" className=" pt-60 px-32">
                <Title  />
                <div className="mt-12">
                    <Label title="Crie sua conta"></Label>
                </div>
                <div className=" mt-12">
                    <Input placeholder="Nome" icon={FiUser} type="text" />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input placeholder="E-mail" icon={FiMail} type="email"   />
                </div>
                <div className="mt-2 w-[340px]">
                    <Input placeholder="Senha" icon={FiLock} type="password"    />
                </div>
                <div className="mt-6">
                    <Button title="Cadastrar"  />
                </div>
            
                <Link to="/">
                    <div className="text-center mt-24">
                        <ButtonText title="Voltar para o login" isActive />
                    </div>
                </Link>
            </div>


        </div>
    )
}