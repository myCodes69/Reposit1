import React from 'react'
import { Link, withRouter } from "react-router-dom";
class Mine extends React.Component{
     componentDidMount(){
         
     }
     state={
         id:7
     }
   
     render(){
         
         return(<><button
         >Tap</button>
         <Link to={{pathname:'/to/'+this.state.id}}>Link</Link>
         </>)
     }
}
export default Mine