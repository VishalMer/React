import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [taskList, setTaskList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTaskList = [...taskList];
    
    console.log(title, note);
    setTitle("");
    setNote("");
  }

  return (
    <div className='h-screen bg-black text-white'>
      <form onSubmit={(e)=>{
              submitHandler(e)
            }}  
        className='flex p-10'>
          
        <div className='flex flex-col p-10 gap-4 w-4/6'>
          <h1 className='text-4xl font-bold'>Notes App</h1>
          <p className='text-lg'>Add your notes below</p>

          <input
            type="text"
            placeholder='Enter Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='px-5 py-2 border-2 rounded outline-none' />

          <textarea
            type="text"
            placeholder='Enter Note'
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className='px-5 py-2 border-2 rounded h-30 outline-none'/>

          <button
            type="submit"  
            className='px-5 py-2 border-2 rounded bg-white text-black hover:bg-gray-200'>
            Add Note
          </button>

        </div>
        <div className='w-full  p-10'>
          <h2 className='text-2xl font-bold mb-4'>Recent Notes</h2>
          <div className='grid grid-cols-3 gap-4 h-50'>
            <div className='border-2 rounded-2xl p-4 bg-gray-800'>
              <h3 className='text-xl font-semibold mb-2'>Sample Title</h3>
              <p>This is a sample note.</p>
            </div>
          </div>
        </div>


      </form>
    </div>
  )
}

export default App
