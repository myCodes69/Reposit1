import React from "react";
const New2=(props)=>{
    if(props.tip)
    {
      return(
        <div>
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
        </div>
       );
    }
}
export default New2;