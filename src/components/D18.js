import React from "react";
import { Link } from "react-router-dom";
class Brow extends React.Component{
    render(){
        console.log(this.props);
        return(<>
             <Link to='/Prof1'>Profile 1</Link>
        </>)
    }
}
export default Brow