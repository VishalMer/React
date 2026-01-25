import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card.jsx'

const App = () => {

  const [userdata, setUserdata] = useState([])
  const [page, setPage] = useState(1)

  const getdata = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=12`)
    setUserdata(response.data)
    console.log(response.data);
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      setUserdata([])
    }
  }

  const nextPage = () => {
    setPage(page + 1)
    setUserdata([])
  }

  useEffect(function () {
    getdata()
  }, [page])


  let printUserData = <h3 className='absolute text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>

  if (userdata.length > 0) {
    printUserData = userdata.map((elem, idx) => {
      return <div key={idx}>
        <Card elem={elem} />
      </div>
    })
  }


  return (
    <div className='bg-black text-white h-100 mx-3 mt-6'>
      <div className='flex flex-wrap gap-4 min-h-[103%]'>
        {printUserData}
      </div>

      <div className='flex justify-center gap-4 my-6'>
        <button
          style={{ visibility: page === 1 ? 'hidden' : 'visible' }}
          onClick={prevPage}
          className='px-5 py-2 bg-amber-400 text-sm rounded active:scale-95 cursor-pointer '>
          Prev
        </button>
          <h4>Page {page}</h4>
        <button
          onClick={nextPage}
          className='px-5 py-2 bg-amber-400 text-sm rounded active:scale-95 cursor-pointer'>
          Next
        </button>
      </div>

    </div>
  )
}

export default App
