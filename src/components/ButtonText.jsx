function ButtonText({ title, isActive = false, ...rest}) {
    return (
        <button 
            // {...rest}
            className={`bg-transparent border-none text-base" ${isActive ? "text-ORANGE" : "text-GRAY_100"}`} 
        >
            {title}
        </button>
    )
}

export { ButtonText }