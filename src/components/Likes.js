import React from "react";
import { Component } from "react";
import updatedcomp from "./Hoc"
  class Likes extends React.Component{
    render(){
        const {name,fun,other}=this.props;
        console.log(this.props);
        return(
   <div>
    
       <p >{other} Likes Count {name}</p>
       <button onClick={fun}>Click to like</button>
       <p>updated : {this.props.name
       }</p>
   </div>
        );
    }
}

const Enhan=updatedcomp(Likes,7)
export default Enhan;