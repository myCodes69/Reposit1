import React from "react";

const New2=(props)=>{
    if(props.tip)
    {
      return(
        <div>
            <p>Name : {props.name}</p>
            
            <p>Age : {props.age}</p>
        </div>
       );
    }
}
class New1 extends React.Component{
    state={
        nm:'',
        ag:'',
        tip:false
    }
    mychange=(e)=>{
        this.setState({[e.target.name]:[e.target.value]})
    }
    myclick=(e)=>{
     //   e.preventDefault();
     this.setState({tip:true})
     return(
         
       <New2 tip={this.state.tip} name={this.state.nm} age={this.state.ag} />
    
       
     );
    }
    render(){
        return(
        <div>
        <form>
            Enter Name <input type="text" name="nm" onChange={this.mychange}/>
            <br></br>
            Enter Name <input type="number" name="ag" onChange={this.mychange}/>
           <br></br>
           
             <button onClick={this.myclick}>Check</button>
             </form>
        </div>
        );
    }
}
export default New1;