import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { api } from '../services/api'
import { useAuth } from '../hooks/auth'

import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { ButtonText } from "../components/ButtonText"
import { FiPlus } from "react-icons/fi"
import { Input } from "../components/Input"
import { Note } from "../components/Note"

function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])

    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName) {
        if(tagName === 'all') {
            return setTagsSelected([])
        }
        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    function handleDetails(id) {
        navigate(`/notes/${id}`)
    }

    useEffect(() => {
       async function fetchTags() {
        const response = await api.get('/tags')
        setTags(response.data)
       }
       
       fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])

    return (
        <div title="Container" className=" w-full h-screen flex bg-BACKGROUND_800">

            <div title="Menu" className=" w-[250px] bg-BACKGROUND_900 flex flex-col justify-between">
                <div title="Brand" className=" flex-initial">
                    <h1 className=" text-ORANGE font-bold text-2xl text-center py-9 border-b border-solid border-t-0 border-x-0 border-BACKGROUND_700">Rocketnotes</h1>
                </div>
                
                <ul title="MenuOptions" className="flex flex-col text-center mt-16 gap-6 flex-auto">
                    
                    <li className="mt-0">
                        <ButtonText 
                            title="Todos"                              
                            isActive={tagsSelected.length === 0}
                            onClick={() => handleTagSelected('all')}
                        />
                    </li>

                    {
                        tags && tags.map(tag => (
                            
                            <li key={String(tag.id)} className="mt-0">
                                <ButtonText 
                                    title={tag.name}
                                    isActive={tagsSelected.includes(tag.name)}
                                    onClick={() => handleTagSelected(tag.name)}
                                />
                            </li>
                        ))
                    }
                    
                </ul>
                <Link to="/createnote" className="bg-ORANGE text-BACKGROUND_900 h-20 text-xl flex items-center justify-center gap-2 flex-initial">
                    <button title="NewNotes" className="bg-ORANGE text-BACKGROUND_900 h-20 text-xl flex items-center justify-center gap-2 flex-initial">
                        <FiPlus />
                        Criar nota
                    </button>
                </Link>
            </div>

            <main className="h-[89vh] w-screen">
                <div className="">
                    <Header />
                </div>

                <div className="flex flex-col h-full">
                    <div title="Search" className=" flex-initial mt-16 mx-16">
                        <Input 
                            placeholder= "Pesquisar pelo título" 
                            type="text" 
                            onChange={event => setSearch(event.target.value)}
                        />
                    </div>

                    <div className="px-16 overflow-auto">
                        <Section title="Minhas notas">                            
                                {
                                    notes.map(note => (
                                        <Note 
                                            key={note.id}
                                            data={note}
                                            onClick={() => handleDetails(note.id)}
                                        />
                                    ))
                                }
                        </Section>
                        
                    </div>
                </div>
            </main>

        </div>
    )
}

export { Home }