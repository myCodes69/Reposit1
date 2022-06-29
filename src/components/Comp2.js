import React from "react";
export const Comp2=(props)=>{
    const login=(e)=>{
    
    
    }

    return(
        <>
             Enter email <input type="email" id="em"/>
                <br></br>
              Enter Password <input type="password" id="pass" />
              <br></br>
              <button onClick={login}>LOGIN</button>
              props value is {props.email}
        </>
    )
}