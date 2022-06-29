import React from "react";
import { Redirect } from "react-router-dom";
class Val2 extends React.Component{
   render(){
       if(localStorage.getItem('Token')===1){
           return(<>Dashboard</>)
       }
       else{
           <Redirect to='/Val'></Redirect>
       }
   }
}
export default Val2;