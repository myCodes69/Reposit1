import React from "react";
import { Link } from "react-router-dom";
class Dir extends React.Component{
    render(){
        return(
            <>
            <ul>
            <li>
                    <Link to="/Home">Click Here</Link>
                </li>
                </ul>
            
            </>
        );
    }
}
export default Dir;