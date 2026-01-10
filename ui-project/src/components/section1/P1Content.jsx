import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const P1Content = (props) => {
  return (
    <div className='pb-12 flex gap-10 h-[81vh] items-center px-18'>
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default P1Content
