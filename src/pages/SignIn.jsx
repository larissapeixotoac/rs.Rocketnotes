import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { ButtonText } from "../components/ButtonText"
import { Title } from "../components/Title"
import { Label } from "../components/Label"
import { Link } from 'react-router-dom'
import { FiMail, FiLock } from "react-icons/fi"

function SignIn() {
    return (
        <div title="Container" className="flex flex-row h-screen">

            <div title="SignIn" className=" pt-60 px-32">
                <Title  />
                <div className="mt-12">
                    <Label title="Faça seu Login"></Label>
                </div>
                <div className=" mt-12 w-[340px]">
                    <Input placeholder="E-mail" icon={FiMail} className="mt-0" type="email"   />
                </div>
                <div className="mt-2 w-[340px]">
                    <Input placeholder="Senha" icon={FiLock} type="password"    />
                </div>
                <div className="mt-6">
                    <Button title="Entrar"  />
                </div>

                <Link to="/register">
                    <div className="text-center mt-24">
                        <ButtonText title="Criar Conta" isActive />
                    </div>                
                </Link>
            </div>

            <div title="Cover" className="bg-backgroundImg flex-1 bg-no-repeat bg-center bg-cover opacity-20">
            </div>

        </div>
    )
}

export { SignIn }