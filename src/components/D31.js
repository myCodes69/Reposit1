import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { Delete } from "./Delete";

class Comp12 extends React.Component{
    state={
        nam:'',
        email:'',
        comm:'',
        ph:'',
       // list:[]
        
    }
    
    chng=(e)=>{
       
       // this.setState({e.target.name:e.target.value})
    }
  
    check=(e)=>{
      //  e.preventDefault()
       if(this.state.nam=='' || this.state.email=='' || this.state.comm==''||this.state.ph.length!=10){
           alert('stop')
          
       }
       else{
          // this.setState({err:''})
           //console.log(this.state);
           
           axios.post('http://localhost:7000/blogs',this.state).then(res=>{
               console.log(res);
               
               this.setState({})
              // console.log(res.data);
               
           }).catch(e=>console.log(e))
       }
    }
    render(){
        return(<>
            <form onSubmit={this.check}>
               Enter Name : <input type="text" name="nam" onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/><br/>
               Enter Email Id : <input type="email" name="email" onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/><br/>
               Enter PhoneNo : <input type="number" name="ph" onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}/><br/>
               Leave a Comment:<br/> <textarea  name="comm" onChange={(e)=>{this.setState({[e.target.name]:e.target.value})}}></textarea>

                <br/><span></span>
                <input type="submit" value="Submit" />
                {/* {this.state.nam} {this.state.email} {this.state.comm} */}
                
            </form>
            <Delete/>
            
               
        </>)
    }
}
export default Comp12