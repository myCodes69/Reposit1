import React from "react";

export const inc=(amn)=>{
   return(
       (dispatch)=>{
           dispatch({
               type:'Increment',
               payload:amn
           })
       }
   )
}
export const dec=(amount)=>{
    
     return ((dispatch)=>{
         dispatch({type:'Decrement',payload:amount})
     }

     )
}