import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
 export default function D2(props){
  if(props.bool === true)
  {
  return(<>
       <p>{props.nam}</p>
       <p>{props.age}</p>
   </>)
  }
  else{
      return <></>
  }
}