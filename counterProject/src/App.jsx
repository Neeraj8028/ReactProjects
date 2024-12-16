import { useState } from "react";
import "./App.css";

function App() {
  // let Counter = 0;
  let [Counter,setCounter] = useState(0)
  
  function incValue(){
    setCounter(Counter+1)
  }

  function decValue(){
    if(Counter > 0) 
    setCounter(Counter-1)
    else Counter === 0
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter value: {Counter}</h2>

      <button onClick={incValue}>Increase value</button>
      <button onClick={decValue}>Decrease value</button>
    </>
  );
}

export default App;
