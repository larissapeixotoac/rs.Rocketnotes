
function Input({ icon: Icon, iconX: IconX, type, value, ...rest }) {
    return (
        <div className={`flex justify-center h-14 items-center bg-BACKGROUND_900 rounded-[10px] py-4 px-4`}>
            <div>
                {Icon && <Icon  size={20} className="mr-3 text-GRAY_300"/>}
            </div>

            <input
                {...rest}
                type={type}
                value={value}
                className=" border-none bg-transparent w-full placeholder:text-GRAY_300 placeholder:text-sm text-WHITE" 
            />

            <>
                {IconX && <button> <IconX size={20} className="ml-4 text-RED"  /> </button>}
            </>

        </div>
    )
}

export { Input }