import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../services/api'

import { Header } from "../components/Header"
import { ButtonText } from "../components/ButtonText"
import { Input } from "../components/Input"
import { Section } from "../components/Section"
import { TagAdd } from "../components/TagAdd"
import { Button } from "../components/Button"
import { AddLink } from "../components/AddLink"

export function CreateNote() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')

    const navigate = useNavigate()

    async function handleNewNote() {
        if(!title) {
            return alert("O campo do título está vazio, escreva alguma coisa para adicionar a nota.")
        } if(newLink) {
            return alert("Existe um Link a ser adicionado. Adicione ou deixe o campo vazio.")
        } if(newTag) {
            return alert("Existe uma Tag a ser adicionada. Adicione ou deixe o campo vazio.")
        } 

        api.post('/notes', {
            title,
            description,
            tags,
            links            
        })

        alert("Nota cadastrada com sucesso.")
        navigate(-1)

    }

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink('')
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleBack() {
        navigate(-1)
    }
    
    return (
        <div className="w-full h-screen flex flex-col">
            <Header />

            <div title="content" className="flex flex-col items-center overflow-y-auto">
                <div className="w-[550px] flex justify-between items-center mt-9">
                    <h2 className=" text-4xl font-medium text-WHITE">
                        Criar nota
                    </h2>

                    <ButtonText 
                        title="voltar" 
                        onClick={handleBack}
                    />
                    
                </div>

                <div className="w-[550px] mt-9">
                    <Input 
                        placeholder="Título" 
                        type="text"  
                        onChange={event => setTitle(event.target.value)}
                    />
                   
                    <textarea 
                        placeholder="Observações" 
                        className=" mt-4 bg-BACKGROUND_900 rounded-[10px] py-4 px-4 placeholder:text-GRAY_300 placeholder:text-sm placeholder:font-ff_secondary text-WHITE w-[550px] h-[150px] resize-none"  
                        onChange={event => setDescription(event.target.value)}
                    />
                    
                    <Section 
                        title="Links úteis"
                        
                    >
                        <div className="flex flex-col gap-2">
                            {
                                links.map((link, index) => (
                                    <AddLink
                                        key={String(index)}
                                        value={link}
                                        onClick={() => handleRemoveLink(link)} //when is needed to give a paramenter for a function it has to be donne like this
                                    />
                                ))
                            }

                            <AddLink
                                isnew
                                placeholder="Novo Link"
                                value={newLink}
                                onChange={event => setNewLink(event.target.value)}
                                onClick={handleAddLink}
                            />                            
                            
                        </div>
                    </Section>

                    <Section title="Marcadores">
                        <div className="flex flex-wrap justify-between gap-2">       
                            {
                                tags.map((tag, index) => (
                                    <TagAdd 
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <TagAdd 
                                placeholder="Novo marcador" 
                                isnew
                                value={newTag}
                                onChange={event => setNewTag(event.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <div className=" mt-8 mb-2">
                        <Button 
                            title="Salvar" 
                            onClick={handleNewNote}
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}