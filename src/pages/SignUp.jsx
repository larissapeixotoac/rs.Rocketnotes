//02 - start backend
import { useState } from "react" //
import { useNavigate } from 'react-router-dom' //
import { FiMail, FiLock, FiUser } from "react-icons/fi"

import { api } from '../services/api' //

import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { ButtonText } from "../components/ButtonText"
import { Title } from "../components/Title"
import { Label } from "../components/Label"

export function SignUp() {
    const [name, setName] = useState('') //
    const [email, setEmail] = useState('') //
    const [password, setPassword] = useState('') //

    const navigate = useNavigate()//

    function handleSignUp() {
        if(!name || !email || !password) {
            return alert('Preencha todos os campos.')
        }
        // Are two ways to confirme if the sending of is succefull, one is using async and await. The other way is using .then() and .catch() and we can already treat if is everthing is ok or not
        api.post("/users", { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso.')
                navigate(-1)
            })
            .catch(error => {
                if(error.response) {                    
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar.')
                }
            })


    } // put on the onClick in the button

    function handleBack() {
        navigate(-1)
    }

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
                    <Input 
                        placeholder="Nome" 
                        icon={FiUser} 
                        type="text" 
                        onChange={event => setName(event.target.value)} //to att the name - event can be named 'e' or anything
                    />
                </div>
                <div className=" mt-2 w-[340px]">
                    <Input 
                        placeholder="E-mail" 
                        icon={FiMail} 
                        type="email"   
                        onChange={event => setEmail(event.target.value)} //
                    />
                </div>
                <div className="mt-2 w-[340px]">
                    <Input 
                        placeholder="Senha" 
                        icon={FiLock} 
                        type="password"    
                        onChange={event => setPassword(event.target.value)} //
                    />
                </div>
                <div className="mt-6">
                    <Button 
                        title="Cadastrar"  
                        onClick={handleSignUp} //
                    />
                </div>
            
                
                <div className="text-center mt-24">
                    <ButtonText 
                        title="Voltar para o login" 
                        isActive 
                        onClick={handleBack}
                    />
                </div>
                
            </div>


        </div>
    )
}