import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter]=useState(15);
  //let counter=15

  const addValue=()=>{
    console.log("clicked",counter);
    
    counter=counter+1
    //console.log("Value added",Math.random());
    setCounter(counter)
    //or setCounter(counter+1)
  }
    const removeValue=()=>{
      console.log("clicked on remove",counter);
      setCounter(counter-1)
      
    }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value : {counter}</h2>
     <button
     onClick={addValue}
     >Add valu {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >Remove value {counter}</button>

    </>
  )
}
 
export default App
