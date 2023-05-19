function Tag({ title, ...rest }) {
    return (
        <div
            {...rest}
            className=" text-xs py-[5px] px-[14px] rounded-[5px] mr-[6px] text-BACKGROUND_900 bg-ORANGE font-ff_secondary"
        >
            {title}
        </div>
    )
}

export { Tag }