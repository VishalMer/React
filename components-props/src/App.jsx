import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  return (
    <div className='parent'>
      <Card user="User1" age={18} img="https://i.pinimg.com/736x/c4/41/4f/c4414f57a3a4ed5df578e1f0259f0fec.jpg"/>
      <Card user="User2" age={20} img="https://i.pinimg.com/736x/da/de/3f/dade3fc7d5671fd6cbcf8d7606548e37.jpg"/>
      <Card user="User3" age={16} img="https://i.pinimg.com/736x/84/c5/d3/84c5d34dadbda8d73111e493bb27553d.jpg"/>
    </div>
  )
}

export default App
