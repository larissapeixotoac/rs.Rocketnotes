import { Link } from 'react-router-dom'
import { useState } from 'react'

import { useAuth } from '../hooks/auth'

import backgroundImg from "../assets/backgroundImg.svg"
import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { ButtonText } from "../components/ButtonText"
import { Title } from "../components/Title"
import { Label } from "../components/Label"

import { FiMail, FiLock } from "react-icons/fi"

function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('') //

    const { signIn } = useAuth() //

    function handleSignIn() {
        signIn({ email, password })
    }

    return (
        <div title="Container" className="flex flex-row h-screen">

            <div title="SignIn" className=" pt-60 px-32">
                <Title  />
                <div className="mt-12">
                    <Label title="Faça seu Login"></Label>
                </div>
                <div className=" mt-12 w-[340px]">
                    <Input 
                        placeholder="E-mail" 
                        icon={FiMail} 
                        className="mt-0" 
                        type="email"   
                        onChange={event => setEmail(event.target.value)}
                    />
                </div>
                <div className="mt-2 w-[340px]">
                    <Input 
                        placeholder="Senha" 
                        icon={FiLock} 
                        type="password"    
                        onChange={event => setPassword(event.target.value)}

                    />
                </div>
                <div className="mt-6">
                    <Button title="Entrar" onClick={handleSignIn} />
                </div>

                <Link to="/register">
                    <div className="text-center mt-24">
                        <ButtonText title="Criar Conta" isActive />
                    </div>                
                </Link>
            </div>
            
            <img src={backgroundImg} alt="" className="flex-1 opacity-20 object-cover "/>

        </div>
    )
}

export { SignIn }