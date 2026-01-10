import React from 'react'
import Section1 from './components/section1/Section1'

const users = [
  {
    img:'https://i.pinimg.com/736x/26/cf/19/26cf19736264ee256addc9aed7a0c61a.jpg',
    intro:'A BMW M4 Competition is the beast of all time.',
    tag:'BMW M4',
    color:'#313439'
  },
  {
    img:'https://i.pinimg.com/736x/36/00/be/3600beae0cd31e00f9734dc811d7d3f9.jpg',
    intro:'The GT650 Chrome, 2 cylinderes',
    tag:'GT650',
    color:'#95A7B5'
  },
  {
    img:'https://i.pinimg.com/736x/a8/49/38/a849387a987e5bf93e181cda1d9ddea8.jpg',
    intro:'A peaceful trip with fav bike in the nature.',
    tag:'Nature',
    color:'#746844'
  }
]

const App = () => {
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App
