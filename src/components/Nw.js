import React, { Suspense } from "react";
import Regi from "./Sus";
export default  function Nw(props){
      console.log(props.fun());
      
      let a=Array.from(props)
      let {nam,...o}=props
      return(<><p>{props.fun()}</p>
               <Regi {...nam}{...o}/>
      
      </>)
}