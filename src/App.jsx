import { useEffect, useState } from 'react'
import axios from 'axios'
function App () {
  const [data, setdata] = useState()
  const [id, setid] = useState(1)
  const [advice, setadvice] = useState('zal ka jevan')
  const [isloading, setisloading] = useState(true)

  0
  0

  async function adviceRun () {
    const res = await axios.get('https://api.adviceslip.com/advice')
    const Getdata = res.data.slip
    console.log(Getdata)
    setadvice(Getdata.advice)
    setid(Getdata.id)
    setisloading(false)
  }

  function handleClick () {
    console.log("hiiii")
    setisloading(true)
    adviceRun()
    
  }
  useEffect(() => {
    adviceRun()

  }, [handleClick, setadvice, setdata])

  return (
    <>
      <div className=' bg-blue-950 text-white w-full h-screen flex items-center justify-center  '>
        <div className=' bg-blue-900 w-[50%] h-[50%] rounded-xl'>
          <div className='flex flex-col items-center justify-center mt-[15%]'>
            <h1 className=' text-center font-bold text-xl'>
              {' '}
              {(isloading) ? 'loading...' : advice}
            </h1>

            <button
              className=' bg-blue-100  p-2 mt-[10%] rounded-xl font-bold text-blue-950 border hover:bg-slate-100  border-black-500'
              onClick={handleClick}
            >
              {/* {' '} */}
              click to advice
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
