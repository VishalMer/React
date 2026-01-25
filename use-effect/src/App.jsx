import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(() => {
    console.log('Effect is running');
  }, [num])

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>

      <button onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}

export default App
App