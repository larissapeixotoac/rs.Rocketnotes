import { FiX, FiPlus } from 'react-icons/fi'

export function AddLink({ isnew = false, value, onClick, ...rest }) {
    return (
        <div
            isnew={isnew}
            {...rest}
            className={`flex justify-between rounded-[10px] py-5 px-5 text-WHITE  ${isnew ? 'bg-transparent border border-GRAY_300 border-dashed ' : 'bg-BACKGROUND_900 border-none ' }`}
        >
            <input 
                type='text'
                value={value}
                readOnly={!isnew}
                {...rest}
                className=" w-full border-none bg-transparent rounded-[10px] font-ff_secondary placeholder:font-ff_secondary placeholder:text-GRAY_300"
            >
            </input>

            <button 
                type='button'
                onClick={onClick}
            > 
                { isnew ? <FiPlus size={24} className='text-ORANGE'/> : <FiX size={24} className='text-RED'  />}
            </button>



            {/* {added ? <div className="flex justify-between bg-BACKGROUND_900 rounded-[10px] py-5 px-5">
                {title}
                <button>
                    {Icon &&  <Icon size={24} className=" text-RED"  />} 
                </button>

            </div> : <div className="flex items-center justify-center bg-transparent border-2 border-GRAY_300 border-dashed rounded-[10px] py-4 px-4">
                <input
                    {...rest}
                    type="text" id="search-title"
                    className=" border-none bg-transparent w-full placeholder:text-GRAY_300 placeholder:text-sm text-WHITE font-ff_secondary placeholder:font-ff_secondary"
                />
                <button className=" ">
                    {Icon && <Icon  size={24} className=" text-ORANGE"/>}
                </button>
            </div>
            
            } */}
        </div>
    )
}