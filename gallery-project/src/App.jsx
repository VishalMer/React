import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userdata, setUserdata] = useState([])

  const getdata = async () => {
    const response = await axios.get("https://picsum.photos/v2/list?page=4&limit=30")

    setUserdata(response.data)

    console.log(response.data);
  }

  let printUserData = 'No User available'

  if (userdata.length > 0) {
    printUserData = userdata.map((elem, idx) => {
      return <a target='_BLANK' href={elem.url}>
        <div>
          <div key={idx} className='h-40 w-49 overflow-hidden rounded-2xl'>
            <img className='h-full w-full object-cover' src={elem.download_url} alt={`Image by ${elem.author}`} />
          </div>
          <h1 className='text-center text-sm my-2'>{elem.author}</h1>
        </div>
      </a>
    })
  }

  return (
    <div className='bg-black text-white h-screen'>
      <button
        onClick={getdata}
        className='px-10 py-2 bg-pink-400 active:scale-95 rounded m-5'>
        Get data
      </button>

      <div className='flex flex-wrap gap-4'>
        {printUserData}
      </div>

    </div>
  )
}

export default App
