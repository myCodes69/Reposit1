import React from "react";
class Regis extends React.Component{
    state={
        eid:'',
        pass:''
    }
    myfun=(e)=>{
        localStorage.setItem('Email',this.state.eid);
        localStorage.setItem('Pass',this.state.pass);
        localStorage.setItem('Token',true);
        this.props.history.push('/custom')
    }
    render(){
        return(<>
            Enter EmailId : <input type='email' name="eid" onChange={(e)=>{this.setState({[e.target.name]:[e.target.value]});console.log(this.state.eid)}}/>
            <br/>
            Enter Password : <input type='password' name="pass" onChange={(e)=>{this.setState({[e.target.name]:[e.target.value]});console.log(this.state.pass)}}/>
            <br/>
            <button onClick={this.myfun}>Register</button>
        </>)
    }
}
export {Regis}