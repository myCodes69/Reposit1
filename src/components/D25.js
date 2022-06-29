import { useState } from "react";
import { Redirect } from "react-router-dom";
//import { Redirect, useHistory } from "react-router-dom";


let pass=false;
export default function Registration(props){
    const[email,setemail]=useState('')
    const[passw,setpass]=useState('')
    
    
    const fun=(e)=>{
        pass=true;
        localStorage.setItem('Email',email)
        localStorage.setItem('Pass',passw)
        props.history.push('/log')
        return(<><Redirect to='/log'></Redirect></>)
        
    }
    const mychng=(e)=>{
        if(e.target.name === 'email'){
    setemail(e.target.value)
    console.log(email);
        }
        else{
            setpass(e.target.value)
        }
    }
    
    return(<>
        Enter email : <input type='email' name="email" onChange={mychng}/><br/>
        Enter Password : <input type='password' name="passw" onChange={mychng}/>
        <br/>
        <button onClick={fun}>Register</button>
    </>)
}
export {pass}