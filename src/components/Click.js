import React from "react";
class Click extends React.Component{
    state={
        coun:0
    }
    fun=(e)=>{
        let coun=this.state.coun;
        return(
            this.setState({coun:coun+1})
        )
    }
    render(){
        return(
            <>
           <button onClick={this.fun}>Clicked {this.state.coun} times</button>
            </>
        );
    }
}
export default Click;
