 import {useState} from 'react';
import './App.css'


  function App(){
  
const [value,setvalue] = useState(0);

const add = ()=>{
  
  setvalue(value + 1);
};

const remove = ()=>{

  setvalue(value -1);
};


    return(
      <>
       <h2>hello react</h2>
       <h1>{value}</h1>

       <button onClick={add}>increment</button>
       <button onClick={remove}>dicrement</button>
       
      </>
    )
  }


export default App
