import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15
  const addValue = () => {
    if(counter > 20){
      counter = "This is an overValue number"
    }
    counter = counter + 1;
    setCounter(counter);
  };
  const decreaseValue = () => {
    if (counter < 0) {
      counter = "You can't decrease negative value";
    }
    counter = counter - 1;
    setCounter(counter);
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decreaseValue}>Decreased Value</button>
      {/* <p>{message}</p> */}
    </>
  );
}

export default App;
