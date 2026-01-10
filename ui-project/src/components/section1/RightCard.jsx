import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='h-full overflow-hidden relative bg-amber-200 w-60 rounded-4xl shrink-0'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContent tag={props.tag} intro={props.intro} color={props.color} id={props.id+1}/>
        </div>
    )
}

export default RightCard
