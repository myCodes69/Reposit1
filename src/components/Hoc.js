import React from "react";

const updatedcomp=(Ogcomp,data)=>{
    class newcomp extends React.Component{
        state={
            count:data,
        }
        fun=(e)=>{
            let count=this.state.count;
            return(
                this.setState({count:count+1})
            )
        }
        render(){
            return( <Ogcomp name={this.state.count} fun={this.fun}
                {...this.props}
            />)
         }
    }
    return newcomp;
}
export default updatedcomp;