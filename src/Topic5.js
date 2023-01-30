//creating custom hooks without Promises.

import React,{useState} from 'react'
import { useStateWithCallback } from './hooks/useStateWithCallback';


const Topic5 = () => {
    const [inp,setInp]=useState(''),
    [consoledVal,setConsoledVal]=useStateWithCallback(inp);

    const handleChange=()=>{
       console.log('1',consoledVal);
       setConsoledVal(inp,(prevVal,inp)=>{
        console.log('2',inp);
       });
       setInp('');
       console.log('3',consoledVal);
    }
 
 return (
   <div>
    Hello I'm Topic5
       <input type='text' value={inp} onChange={(event)=>{
           setInp(event.target.value);

       }}/>
       <button onClick={handleChange}>Click Me</button>
   </div>
 )
}


export default Topic5