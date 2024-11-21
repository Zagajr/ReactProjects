import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './Components/cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl bg-green-300 p-3 rounded-md'> Vite TailWind </h1>
      <Cards userName='Zabi' role='Senior System Engineer'/>
    </>
  )
}

export default App
