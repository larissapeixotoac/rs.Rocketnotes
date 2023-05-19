function Button({ title, loading, ...rest }) {
    
    return (
        <button
            disable={loading}
            {...rest}
        className="w-full bg-ORANGE text-BACKGROUND_800 h-14 border-0 py-0 px-4 rounded-[10px] font-medium disabled:opacity-50"
        >
            { loading ? 'Carregando...' : title }
        
        </button>    
    )
}

export { Button }

/*
Can be donne like this:
function Button(props) {
    
    return (
        <button className=" w-full bg-ORANGE text-BACKGROUND_800 h-14 border-0 py-0 px-4 rounded-[10px] font-medium disabled:opacity-50 mb-1">
             {props.title}
        </button>    
    )
}

*/