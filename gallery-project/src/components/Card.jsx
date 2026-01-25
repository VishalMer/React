import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a target='_BLANK' href={props.elem.url}>
                <div className='h-40 w-48 overflow-hidden rounded-2xl'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt={`Image by ${props.elem.author}`} />
                </div>
                <h1 className='text-center text-sm my-2'>{props.elem.author}</h1>
            </a>
        </div>
    )
}

export default Card
