import React from "react";
import react from "react";
import { withRouter } from "react-router-dom";

let a={}
let pass=false
   class D15 extends React.Component{
    
  state={
      email:'',
      passw:''
  }
  myf=(e)=>{
      //this.setState({islogin:true})
      localStorage.setItem('Email',this.state.email)
        localStorage.setItem('Passw',this.state.passw)
      pass=true
      console.log(pass);
      if(this.state.email===''||this.state.passw===''){
          alert('m')
      }
      else{
      this.props.history.push('/Log')}
  }
  mychng=(e)=>{
    this.setState({[e.target.name]:[e.target.value]})
}

    render(){
        return(<>
        
        Enter email : <input type='email' name="email" onChange={this.mychng}/><br/>
        Enter Password : <input type='password' name="passw" onChange={this.mychng}/>
        <br/>
        <button onClick={this.myf}>Register</button>
    
        </>)
    }
}
export {pass}
export default withRouter(D15)