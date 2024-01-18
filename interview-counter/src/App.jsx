import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)

  const addValue = ()=>{
    setCounter((prevCounter=>prevCounter+1))
    setCounter((prevCounter=>prevCounter+1))
    setCounter((prevCounter=>prevCounter+1))
    setCounter((prevCounter=>prevCounter+1))

    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // console.log("add clicked",counter)
  }

  const subValue = ()=>{
    setCounter(counter-1)
    console.log("sub clicked",counter)
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Subtact value</button>
    </>
  )
}

export default App
