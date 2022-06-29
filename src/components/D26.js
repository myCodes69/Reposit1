import { useState } from "react";
import { Redirect } from "react-router-dom";
import { pass as p} from "./D25";

export default function Log(props){
    const[email,setemail]=useState('')
    const[passw,setpass]=useState('')
    function verify(){
        if(localStorage.getItem('Email')===email && localStorage.getItem('Pass')===passw){
              alert('Success')
        }
        else{
            alert('nooo')
        }
    }
   if(p===true){
       return(<>
            Enter email : <input type='email' name="email" onChange={(e)=>{
             setemail(e.target.value)
        }}/><br/>
        Enter Password : <input type='password' name="passw" onChange={(e)=>{
             setpass(e.target.value)
        }}/>
        <br/>
        <button onClick={verify}>Login</button>
       </>)
   }
   else{
       return(<><Redirect
              to='/Reg'></Redirect> </>)
   }
}
