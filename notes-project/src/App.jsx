import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const [taskList, setTaskList] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTaskList = [...taskList];

    copyTaskList.push({ title, note })
    setTaskList(copyTaskList)

    console.log(taskList);
    setTitle("");
    setNote("");
  }

  const deleteNote = (idx) =>{
    const copyTaskList = [...taskList];
    copyTaskList.splice(idx,1);
    setTaskList(copyTaskList);
  }

  return (
    <div className='h-screen flex p-10 w-full bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex flex-col gap-4 min-w-1/2 p-10'>

        <h1 className='text-4xl font-bold'>Notes App</h1>
        <p className='text-lg'>Add your notes below</p>

        <input
          type="text"
          placeholder='Enter Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='px-5 py-2 w-full border-2 rounded outline-none' />

        <textarea
          type="text"
          placeholder='Enter Note'
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className='px-5 py-2 border-2 rounded h-30 outline-none' />

        <button
          type="submit"
          className='px-5 py-2 border-2 rounded bg-white text-black hover:bg-gray-200'>
          Add Note
        </button>

      </form>
      <div className='w-full border-l-2 p-10'>
        <h2 className='text-2xl font-bold text-center mb-4'>Recent Notes</h2>
        <div className='flex flex-wrap justify-center gap-4'>
          {taskList.map(function (elem, idx) {
            return <div key={idx} className='h-60 w-40 flex flex-col justify-between rounded-2xl bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/large_2x/sticky-note-paper-background-free-png.png")] bg-cover bg-no-repeat'>
              <div>
                <h3 className='text-xl p-6 text-black font-semibold'>{elem.title}</h3>
                <p className='px-6 text-gray-500'>{elem.note}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='p-1 m-3 text-xs font-bold bg-red-500 text-white cursor-pointer active:scale-95 rounded'>Delete</button>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
