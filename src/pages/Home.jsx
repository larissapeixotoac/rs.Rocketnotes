import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { ButtonText } from "../components/ButtonText"
import { FiPlus } from "react-icons/fi"
import { Input } from "../components/Input"
import { Note } from "../components/Note"
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div title="Container" className=" w-full h-screen flex bg-BACKGROUND_800">

            <div title="Menu" className=" w-[250px] bg-BACKGROUND_900 flex flex-col justify-between">
                <div title="Brand" className=" flex-initial">
                    <h1 className=" text-ORANGE font-bold text-2xl text-center py-9 border-b border-solid border-t-0 border-x-0 border-BACKGROUND_700">Rocketnotes</h1>
                </div>
                
                <ul title="MenuOptions" className="flex flex-col text-center mt-16 gap-6 flex-auto">
                    <li className="mt-0"><ButtonText title="Todos" isActive /></li>
                    <li className="mt-0"><ButtonText title="Frontend" /></li>
                    <li className="mt-0"><ButtonText title="Node" /></li>
                    <li className="mt-0"><ButtonText title="React" /></li>
                </ul>
                <Link to="/createnote" className="bg-ORANGE text-BACKGROUND_900 h-20 text-xl flex items-center justify-center gap-2 flex-initial">
                    <button title="NewNotes" className="bg-ORANGE text-BACKGROUND_900 h-20 text-xl flex items-center justify-center gap-2 flex-initial">
                        <FiPlus />
                        New Note
                    </button>
                </Link>
            </div>

            <main className="h-[89vh] w-screen">
                <div className="">
                    <Header />
                </div>

                <div title="Content" className="flex flex-col h-full">
                    <div title="Search" className=" flex-initial mt-16 mx-16">
                        <Input placeholder= "Pesquisar pelo título" type="text" />
                    </div>

                    <div className="px-16 overflow-auto">
                        <Link to="/details/1">
                            <Section title="Minhas notas">
                                <Note data={{
                                    title: 'React',
                                    tags: [
                                        {id: '1', name: 'react'},
                                        {id: '2', name: 'rocketseat'}
                                    ]
                                    }}>
                                </Note>
                            </Section>
                        </Link>
                        
                    </div>
                </div>
            </main>

        </div>
    )
}

export { Home }