import React, {useState} from 'react';

export const useAsyncState=(initialval)=>{
    const [state,setState]=useState(initialval);

    const asyncSetState=(value,callBack)=>{
       var promise=  new Promise((resolve)=>{
         setState(value);
         resolve(value);
        });
        promise
        .then((value)=>callBack(value));

    }
    return [state,asyncSetState];
};

