import React,{useState} from 'react';
 export const useStateWithCallback=(initialVal)=>{
    const [state,setState]=useState(initialVal);

    const setValCallBack=(newVal,callBack)=>{
        setState((prevVal)=>{

            if(callBack)
               callBack(prevVal,newVal);

               return newVal;
        })

    };

    return [state,setValCallBack]
}