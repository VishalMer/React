import React from 'react'

const RightCardContent = (props) => {
    return (
        <div className='absolute h-full w-full top-0 left-0 p-6 flex flex-col justify-between'>
            <div>
                <h3 style={{color:props.color}} className='bg-white flex justify-center rounded-full font-semibold h-8 w-8 items-center'>{props.id}</h3>
                <p className='text-l text-white mt-6 leading-4 [text-shadow:_0_2px_2px_rgb(0_0_0_/_0.9)]'>{props.intro}</p>
            </div>
            <div>
                <div className='flex justify-between'>
                    <button style={{backgroundColor:props.color}} className='rounded-full px-4 font-medium py-2 text-white'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='rounded-full px-4 font-medium py-2 text-white'><i className="ri-arrow-right-line "></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
