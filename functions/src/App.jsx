import React from 'react'

const App = () => {
  function inputChanging(val){
    console.log("Input changed", val)
  }
  return (
    <div>
      <input
      onChange = {function(elem){
        inputChanging(elem.target.value)
      }}
      type='text'
      placeholder='Enter name'
      ></input>
    </div>
  )
}

export default App
