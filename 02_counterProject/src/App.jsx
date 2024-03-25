import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [value , setValue] = useState("sonu")
  // let counter = 15
  const addValue = () => {
    if (counter > 20) {
      counter = "This is an overValue number";
    } else {
      setCounter((counter)=> counter + 1)
      setCounter((counter)=> counter + 1)
      setCounter((counter)=> counter + 1)
      setCounter((counter)=> counter + 1)
    }
  };
  const decreaseValue = () => {
    if (counter < 0) {
      counter = "You can't decrease negative value";
    } else {
      counter = counter - 1;
      setCounter(counter);
    }
  };
  const changeValue = ()=>{
    value = ["smit","Prajapati", "Kanubhai", "Keshavlala" ]
    setValue(value)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add a Value</button>
      <br />
      <button onClick={decreaseValue}>Decreased a Value</button>
      {/* <p>{message}</p> */}
      <button onClick={changeValue}>{value}</button>
    </>
  );
}

export default App;
