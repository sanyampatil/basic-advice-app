import { useEffect, useState } from 'react'
1
function App () {
  const [data, setdata] = useState()
  const [id, setid] = useState(1)
  const [advice, setadvice] = useState("  zal ka jevan")

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
    console.log("hiii")
  }
  useEffect(() => {
     adviceRun()
  }, [adviceRun,  handleClick])


  return (
    <>
      <h1>Advice app{advice}</h1>
      <h2>id is{id}</h2>

      <button onClick={handleClick}> click to advice</button>
    </>
  )
}

export default App
