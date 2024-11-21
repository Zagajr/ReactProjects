import {useState} from 'react'
import './App.css'

function App() {
  const [Counter,setCounter] = useState(0);
  let addValue = ()=>{
    setCounter(Counter+1);
  }
  let subtractValue = ()=>{
    setCounter(Counter>0?Counter-1:Counter);
  }
  return (
    <>
      <h1>Couter with React {Counter}</h1>
      <h2>Counter value: {Counter} </h2>
      <button onClick={addValue}>App value</button>{" "}
      <button onClick={subtractValue}>subtract value</button>
    </>
  )
}
export default App