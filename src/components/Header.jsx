import { RiShutDownLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <div className="h-[105px] w-full border-b border-solid border-t-0 border-x-0 border-BACKGROUND_700 flex justify-between items-center pt-0 px-20">

            <Link to="/profile">
                <div className="flex items-center">
                    <img 
                        src="https://github.com/larissapeixotoac.png" 
                        alt="Foto do usuário" 
                        className=" w-14 h-14 rounded-full"
                    />

                    <div className="flex flex-col ml-4 leading-6">
                        <span className="text-sm text-GRAY_100">Bem vindo(a)</span>
                            <strong className=" text-lg text-WHITE">Larissa Peixoto</strong>
                    </div>

                </div>
            </Link>

            <button className=' border-none bg-transparent w-9 h-9'>
                <Link to="/">
                    <RiShutDownLine className=' text-GRAY_100 text-4xl' />
                </Link>
            </button>
        </div>
    )
}

export { Header }
