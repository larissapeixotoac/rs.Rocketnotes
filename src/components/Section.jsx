function Section({ title, children }) {
    return (
        <div className=" mx-0 mt-[54px]">

           <h2 className=" border-b border-solid border-t-0 border-x-0 border-BACKGROUND_700 pb-4 mb-4 text-GRAY_100 text-xl font-normal" >{title}</h2> 
           
           {children}
        </div>
    )
}

export { Section }