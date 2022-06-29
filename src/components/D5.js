import React from "react";
import D2 from "./D2";
let c=0
export default class D5 extends React.Component{
    state={
        nam:'',
        age:'',
        bool:false
    }

    myfunc=(e)=>{
        
        if(c%2==0){
         this.setState({bool:true})
         c+=1
        }
        else{
            this.setState({bool:false})
            c+=1
        }
    }
    mych=(e)=>{
       this.setState({[e.target.name]:[e.target.value]})
    }
    render(){
        return(<>
           <input type='text' name="nam" onChange={this.mych} placeholder="Enter Name"/>
           <br/>
           <input type='password' name="age" onChange={this.mych} placeholder="Enter Pass"/>
         <br/>
           <button onClick={this.myfunc}>Show/unShow</button>
           <br/>
           <D2 {...this.state}/>
        </>)
        
    }
}