//creating custom hooks by Promises

import React ,{useState } from 'react'
import { useAsyncState } from './hooks/useAsyncState';

const Topic4 = () => {
    const [inp,setInp]=useState(''),
     [consoledVal,setConsoledVal]=useAsyncState(inp);

     const handleChange=()=>{
        console.log('1',consoledVal);
        setConsoledVal(inp,(currentState)=>{
            console.log('2',currentState);
           
        });
        setInp('');
        console.log('3',consoledVal);
     }
  
  return (
    <div>
        <input type='text' value={inp} onChange={(event)=>{
            setInp(event.target.value);

        }}/>
        <button onClick={handleChange}>Click Me</button>
    </div>
  )
}

export default Topic4