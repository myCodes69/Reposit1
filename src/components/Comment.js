import React from "react";
import { Component } from "react";
import updatedcomp from "./Hoc"
class Comment extends React.Component{
    render(){
        const {name,fun,...r2}=this.props;
      console.log(this.props);
        return(
   <div>
       <p >{r2.nm} Comment Count on {r2.so} {this.props.name}</p>
       <button onClick={this.props.fun}>Click to Comment</button>
   </div>
        );
    }
}
const Enha=updatedcomp(Comment,9);
export default Enha;