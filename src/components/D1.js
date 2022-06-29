import React from "react";
import D2 from './D2'
class D1 extends React.Component{
    state={
       loc:'Kolkata'
    }
  mychange=(e)=>this.setState({[e.target.name]:[e.target.value]},()=>{if(e.target.value === 'Pune'){alert('Forbidden'); return false}})
    constructor(props){
        super(props)
        console.log('Constructor');
    }
    componentWillMount(){
        console.log('will mount');
    }
    shouldComponentUpdate(){
    
        console.log('SCU');
        return true
    }
    componentWillUpdate(){
        console.log('will update');
    }
componentDidMount(){
    console.log('Did mount');
}
componentWillUnmount(){
    console.log('will unmount');
}
componentDidUpdate(){
    console.log('did update');
}
    render(){
        console.log('Render');
        return(<>
        
           <input type='text' onChange={this.mychange} name="loc"/>
           
           <p>{this.state.loc} </p>
           
           

        </>)
    }
}
export default D1