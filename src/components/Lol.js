import React from "react";
export default class Lol extends React.Component{
    state={
        tot:999,
        Lik:0,
        bol:true
    }

   fun=()=>{
       if(this.state.bol){
           let Lik=this.state.tot
           this.setState({tot:Lik+1})
           this.state.bol=false
       }
       else{
           let m=this.state.tot
           this.setState({tot:m-1})
           this.state.bol=true
       }

   }
   render(){
        return(<>
            <p>{this.state.tot}</p>
            <button onClick={this.fun}>Like</button>
        </>)
    }
}