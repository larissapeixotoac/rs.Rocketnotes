function ButtonText({ title, isActive = false, onClick, ...rest}) {
    return (
        <button 
            {...rest}
            onClick={onClick}
            className={`bg-transparent border-none text-base" ${isActive ? "text-ORANGE" : "text-GRAY_100"}`} 
        >
            {title}
        </button>
    )
}

export { ButtonText }