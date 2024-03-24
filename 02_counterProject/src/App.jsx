import { useState } from "react";
import "./App.css"


function App() {
  let [counter, setCounter] = useState(0) 

  // let counter = 15
  const addValue = ()=>{
    console.log("clicked", counter);
    counter = counter + 1
    setCounter(counter  )
  }
  return (
    <>
      <h1>Chai Aur React</h1>   
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button>Decreased Value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
