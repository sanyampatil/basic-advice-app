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
  useEffect(() => {
    adviceRun()
  }, [])
  console.log(setadvice)
  return (
    <>
      <div className=''>
        <div className=''>
          <h1 className=' text-2xl'> Advice:- {advice}</h1>
          <h2>id:-{id}</h2>

          <button
            className=' text-2xl  bg-blue-200  border  border-black-500'
            onClick={handleClick}
          >
            {' '}
            click to advice
          </button>
        </div>
      </div>
    </>
  )
}

export default App
