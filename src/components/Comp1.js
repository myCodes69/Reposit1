import React from "react";
import { Comp2 } from "./Comp2";
class Comp1 extends React.Component{
    state={
        em:'',
        pass:''
    }
    mychng=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    myclic=(e)=>{
        <Comp2 email={this.state.em} pass={this.state.pass}/>
    }
    render(){
        return(
            <>
                Enter email <input type="email" name="em" onChange={this.mychng}/>
                <br></br>
              Enter Password <input type="password" name="pass" onChange={this.mychng}/>
              <br></br>
              <button onClick={this.myclic}>Register</button>
              <Comp2 email={this.state.em} pass={this.state.pass}/>
            </>

        )
    }
}
export default Comp1;