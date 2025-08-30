import { useState } from "react"

function App() {
  let [counter,UseCounter]= useState(0);
  const addValue = function (){
  UseCounter(counter+1)
 }
 const removeValue = function (){
  if(counter>0){
    UseCounter(counter-1)
  }
 }
  return (
    <>
    <h2>Counter</h2>
    <p>The value of counter is: {counter}</p>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    <p>The value is {counter}</p>
    </>
  )
}

export default App
