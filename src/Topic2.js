import React, {useState} from 'react'

const Topic2 = () => {
    const [inp,setInp]=useState(''),
    [store,setStore]=useState([]);
    const handleChange=()=>{
        setStore(inp);
        console.log(store);
        setInp('');
        console.log(store);

    }
  return (
    <div>
        <input value={inp} onChange={(event)=>{
            setInp(event.target.value);
        }} />
        <button onClick={handleChange}>Click me</button>
    </div>
  )
}

export default Topic2