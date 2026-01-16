import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function resetCount() {
    setCount(0)
  }

  function increaseByFive() {
    setCount(count + 5)
  }

  return (
    <div className='parent'>
      <h1>{count}</h1>
      <div className="btn">
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
      </div>
      <div className="btn">
      <button onClick={increaseByFive}>Increase by 5</button>
      <button onClick={resetCount}>Reset</button>
      </div>
    </div>
  )
}

export default App
