import React from "react";
const Hoc2=(Og,data)=>{
    class Neww extends React.Component{
        state={
            count:data,
        }
        fun1=(e)=>{
            let count=this.state.count;
            if(count>0){
            return(
                this.setState({count:count-1})
            )
            }
            else{
                alert("Not possible")
            }
        }
        render(){
            return(<>
                <Og nm={this.state.count} func={this.fun1} {...this.props}/>
            </>)
        }
    }
    return Neww;

}
export default Hoc2;