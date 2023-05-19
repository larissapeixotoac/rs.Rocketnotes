import { Header } from "../components/Header"
import { ButtonText } from "../components/ButtonText"
import { Input } from "../components/Input"
import { Section } from "../components/Section"
import { TagAdd } from "../components/TagAdd"
import { Button } from "../components/Button"
import { AddLink } from "../components/AddLink"
import { Link } from 'react-router-dom'

export function CreateNote() {
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />

            <div title="content" className="flex flex-col items-center overflow-y-auto">
                <div className="w-[550px] flex justify-between items-center mt-9">
                    <h2 className=" text-4xl font-medium text-WHITE">
                        Criar nota
                    </h2>
                    <Link to="/">
                        <ButtonText title="voltar" />
                    </Link>
                </div>

                <div className="w-[550px] mt-9">
                    <Input placeholder="Título" type="text"  />
                   
                    <textarea placeholder="Observações" className=" mt-4 bg-BACKGROUND_900 rounded-[10px] py-4 px-4 placeholder:text-GRAY_300 placeholder:text-sm placeholder:font-ff_secondary text-WHITE w-[550px] h-[150px] resize-none"  />
                    
                    <Section title="Links úteis">
                        <AddLink value="Testando" />

                        <div className="mt-4">
                            <AddLink placeholder="Novo link" isnew  />
                        </div>
                    </Section>

                    <Section title="Marcadores">
                        <div className="flex flex-wrap justify-between"> 
                            <TagAdd value="React" />                            
                            <TagAdd placeholder="Novo marcador" isnew />
                        </div>
                    </Section>

                    <div className=" mt-8 mb-2">
                        <Button title="Salvar" />
                    </div>
                </div>
            </div>

        </div>
    )
}