import React from "react";

export default class Fs extends React.Component{
    // state var which is an object 
   state={
       name:'',
       age:''
   }
   mychange=(e)=>this.setState({[e.target.name]:[e.target.value]})
   myf(){
       console.log('My function');
   }

    render(){
        return(<>Name : <input type="text" name="name"onChange={this.mychange}></input>
        <br/>
       Age : <input type="number" name="age"onChange={this.mychange}></input>
       <p>Name and age : {this.state.name}---{this.state.age}</p>
        </>)
    }
}
// let a=new Fs('Soumya',22)
// console.log(a.render());