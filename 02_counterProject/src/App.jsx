import "./App.css"
function App() {
  let counter = 15
  const addValue = ()=>{
    
  }
  return (
    <>
      <h1>Chai Aur React</h1>   
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button>Decreased Value</button>
    </>
  )
}

export default App
