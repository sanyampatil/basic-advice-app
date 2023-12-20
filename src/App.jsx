import { useEffect, useState } from 'react'
1
function App () {
  const [data, setdata] = useState()
  const [id, setid] = useState(1)
  const [advice, setadvice] = useState('  zal ka jevan')

  0
  0

  function adviceRun () {
    try {
      fetch('https://api.adviceslip.com/advice')
        .then(res => {
          return res.json()
        })
        .then(data1 => {
          setdata(data1)

          setid(data1.slip.id)
          setadvice(data.slip.advice)
        })
    } catch (error) {
      console.log(error)
    }
  }

  function handleClick () {
    adviceRun()
    console.log('hiii')
  }
  // useEffect(() => {
  //    adviceRun()
  // }, [adviceRun,  handleClick])
console.log(setadvice)
  return (
    <>
      <div className='flex items-center justify-center   w-full h-screen bg-blue-800'>
      <div className=''>

        <h1 className='bg-blue-200   p-10 text-[50px] align-middle  '> Advice:- {advice}</h1>
        <h2>id is{id}</h2>

        <button className='bg-blue-100 p-4'  onClick={handleClick}> click to advice</button>
      </div>
      </div>
    </>
  )
}

export default App
