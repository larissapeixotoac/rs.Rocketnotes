import { Button } from "../components/Button"
import { Header } from "../components/Header"
import { Section } from "../components/Section"
import { Tag } from "../components/Tag"
import { ButtonText } from "../components/ButtonText"
import { Link } from 'react-router-dom'

function Details() {
    
  return(
    <div className="w-screen h-screen grid grid-flow-row grid-rows-[105px_minmax(500px,_1fr)_50px]">
      <Header />

      <main className="row-span-3 overflow-y-auto px-0">

        <div className=" max-w-[550px] my-0 mx-auto flex flex-col">
          <div className="text-right mt-16">
            <ButtonText title="Excluir nota" isActive/>
          </div>

          <h1 className=" font-medium text-4xl text-WHITE pb-4 pt-16">
            Introdução ao React
          </h1>
          
          <p className="text-justify font-ff_secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          <Section title="Links úteis">
            <ul className="list-none">
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </ul>
          </Section>
          <Section title="Marcadores">
            <div className="flex">
              <Tag title="express"  />
              <Tag title="nodejs"  />
            </div>
          </Section>
          <div className="my-10">
            <Link to="/">
              <Button title="Voltar"  />
            </Link>
          </div> 
        </div>
      </main>
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