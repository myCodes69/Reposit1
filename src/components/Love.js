import React from "react";

import Hoc2 from "./Hoc2";
const Love=(props)=>{
      console.log(props);
        return(<>
            <h5>{props.nam} Love react on this post {props.nm}</h5>
            <button onClick={props.func}>Decrease</button>
        </>)
    }

export default Hoc2(Love,9);