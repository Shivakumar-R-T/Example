//workAround is useEffect hook 

import React ,{useState ,useEffect}from 'react'

function Topic1() {
    const [inp,setInp]=useState(""),
       [consoledVal,setConsoled]=useState([]);


       useEffect(()=>{
        console.log('3',consoledVal);

       },[consoledVal]);

     const  handleOnclick=()=>{
      console.log('1',consoledVal);
            setConsoled(inp);
            console.log('2',consoledVal);
            setInp('');
       }
  return (
    <div>
        <input value={inp} onChange={(event)=>{
            setInp(event.target.value);

        }} />

        <button onClick={handleOnclick}>Click Me</button>
    </div>
  )
}

export default Topic1