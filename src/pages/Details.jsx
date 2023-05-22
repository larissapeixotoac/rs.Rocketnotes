import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { api } from '../services/api'

import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { Tag } from "../components/Tag"
import { ButtonText } from "../components/ButtonText"

function Details() {
    const [data, setData] = useState(null)

    const params = useParams()  
    const navigate = useNavigate()

    async function handleRemoveNote() {
        const confirm = window.confirm("Deseja realmente excluir essa nota?")

        if(confirm) {
            await api.delete(`/notes/${params.id}`)
            navigate(-1)
        }
    }

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            setData(response.data)
        }

        fetchNote()
    }, [])

    return(
        <div className="w-screen h-screen grid grid-flow-row grid-rows-[105px_minmax(500px,_1fr)_50px]">
        <Header />
            {
                data && 
                <main className="row-span-3 overflow-y-auto px-0">

                    <div className=" max-w-[550px] my-0 mx-auto flex flex-col">
                        <div className="text-right mt-16">
                            <ButtonText 
                                title="Excluir nota" 
                                isActive
                                onClick={handleRemoveNote}
                            />
                        </div>

                        <h1 className=" font-medium text-4xl text-WHITE pb-4 pt-16">
                            {data.title}
                        </h1>
                        
                        <p className="text-justify font-ff_secondary">
                            {data.description}
                        </p>

                        {
                            data.links &&                        
                            <Section title="Links úteis">
                                <ul className="list-none">
                                    {
                                        data.links.map(link => (
                                            <li key={String(link.id)}>                                            
                                                <a href={link.url} target='_SEJ' rel="noreferrer" >
                                                    {link.url}
                                                </a>
                                            </li>
                                        ))
                                    }                                
                                </ul>
                            </Section>
                        }

                        {
                            data.tags &&
                            <Section title="Marcadores">
                                <div className="flex">
                                    {
                                        data.tags.map(tag => (
                                            <Tag 
                                                key={String(tag.id)}
                                                title={tag.name}  
                                            />
                                        ))
                                    }
                                </div>
                            </Section>
                        }

                        <div className="my-10">
                            <Button 
                                title="Voltar"  
                                onClick={handleBack}
                            />                            
                        </div> 
                    </div>
                </main>
            }

        </div>

    )
}

export { Details }

/*
fragment: <> </>
or
import { Fragment } from "react"
<Fragment> </Fragment>

used to just incapsule the content without styles. With div we have styles.

*/