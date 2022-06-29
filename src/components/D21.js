import e from "cors";
import { useState } from "react";
import { Redirect } from "react-router-dom";


export default function Login(props){
    let [em,setem]=useState('')
   let [pa,setpa]=useState('')
 if(localStorage.getItem('Token')==true){
     return(<>
         Enter Email : <input type='email' name="em" onChange={(e)=>{setem(e.target.value)}} />
         <br/>
         Enter Pass : <input type='password' name="pa"  onChange={(e)=>{setpa(e.target.value)}}/>
         <br/>
         <button onClick={(e)=>{
             if(em === localStorage.getItem('Email')  && pa === localStorage.getItem('Pass')){
                props.history.push('/Dashboard')
             }
             else{
                 alert('Does not match')
                 return false
             }
         }}>LOGIN</button>
     </>)
 } 
 else{
     return(<>
         <Redirect to='/'></Redirect>
     </>)
 }   
}