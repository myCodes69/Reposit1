import React from "react";

const Msg=(props)=>{
   if(!props.inf){
       return (<><p>Login First</p></>)
   }
   else{
       return (<><p>Log out</p></>)
   }
}
function Login(props){
    return (<><button onClick={props.ine}>Login</button></>)
}
function Logout(props){
    return (<><button onClick={props.ini}>Logout</button></>)
}

export default class Md extends React.Component{
    state={
        isLogin:false
    }
  f1(e){
    this.setState({isLogin:true})
  e.target.value=true  
}
  f2(e){
    this.setState({isLogin:false})
 e.target.value=false  
}
    render(){
        return(<><Msg inf={this.state.isLogin}/>
             { (this.state.isLogin) ? <Logout ini={this.f2} /> : <Login ine={this.f1}/>}
        </>)
    }
}