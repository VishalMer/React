import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
    return (
        <div className='h-full w-3/4 py-6 pl-12 flex justify-between'>
            {props.users.map(function (elem,idx) {
                return (
                    <RightCard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} intro={elem.intro}/>
                )
            })}
        </div>
    )
}

export default RightContent
