import React from "react";
import { Route, Router } from "react-router-dom";
import Val2 from "./Val2";
export default class Val extends React.Component{
    mybtn(){
        localStorage.setItem('Token',1)
        {this.props.history.push('/Val2')};
    }

    render(){
    return(<><button onClick={this.mybtn}>CLICK ME</button></>)}
}