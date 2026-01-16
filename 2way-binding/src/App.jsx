import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, SetTitle] = useState('')
  const handleSubmit = (event) => {
    event.preventDefault()
   // const formData = new FormData(event.target)
    //const name = formData.get('name')
    console.log('Submitted name:', title)
    SetTitle('')
  }
  return (
    <div>
      <form onSubmit={(e) =>{
        handleSubmit(e)
      }}>
        <label>
          Name:
          <input 
          type="text" 
          value={title}
          placeholder='Enter Name'
          onChange={(e) =>{
            SetTitle(e.target.value)
          }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
