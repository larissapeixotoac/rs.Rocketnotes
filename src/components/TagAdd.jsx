import { FiX, FiPlus } from 'react-icons/fi'

export function TagAdd({ value, isnew = false, onClick, ...rest}) {
    return (
        <div
            isnew={isnew}
            {...rest}
            className='mb-3'
        >
            {!isnew ? <div className="flex-1 font-ff_secondary text-white px-5 py-5 bg-BACKGROUND_900 rounded-[10px] flex justify-between mr-5 w-full">
                {value} 
                <button 
                    type='button'
                    onClick={onClick}

                >
                    <FiX size={24} className="text-RED w-6 h-6"    />
                </button>
            
            </div> : <div className="border rounded-[10px] border-GRAY_300 border-dashed flex px-[18px] py-[18px]">
                <input
                    type="text" 
                    value={value}
                    {...rest}
                    className=" bg-transparent placeholder:font-ff_secondary "
                />
                <button
                    type='button'
                    onClick={onClick}
                >
                    <FiPlus size={24} className="text-ORANGE w-6 h-6"    />
                </button>
            </div> }
            
        </div>
    )
}