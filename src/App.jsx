import { useState } from 'react'
import './App.css'

function App() {
   
 let [counter,setcounter] = useState(15)
const addvalue = ()=>{
  console.log("hello");
  setcounter(counter + 1)
}
  const removevalue = ()=>{
    console.log("ok");
    setcounter(counter - 1)

    
  }
  

  return (
    <>
    <h1>react</h1>
    <h2>{counter}</h2>
     <button
     onClick={addvalue}
     >addvalue</button>
     <button
      onClick={removevalue}
     >remove</button>
     </>
  )

}
export default App
