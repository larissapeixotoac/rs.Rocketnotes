import { Tag } from '../components/Tag'

function Note({ data, ...rest}) {
    return (
        <button 
            {...rest}
            className=" w-full bg-BACKGROUND_700 border-none rounded-[10px] p-[22px] mb-4"        
        >
            <h1 className="flex-1 text-left font-bold text-2xl text-WHITE ">
                {data.title}
            </h1>

            {
                data.tags && //if tags exist its going to show
                
                <footer className="w-full flex mt-6">
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name}    />)
                    }
                </footer>
            }
        </button>
    )
}

export { Note }