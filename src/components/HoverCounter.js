import React from "react";
class HoverCounter extends React.Component{
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
        <div>
            <button onMouseMove={this.fun}>Hovered {this.state.coun} times</button>
        </div>
      );
  }
}
export default HoverCounter;