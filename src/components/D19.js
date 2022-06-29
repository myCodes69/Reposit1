import React from "react";
import react from "react";
 export default class Profile1 extends React.Component{

  componentWillMount(){
      setTimeout(() => {
          this.props.history.push('/')
      }, 2000);
  }

    render(){
        return(<>Profile 1</>)
    }
}