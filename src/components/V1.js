import React, { useEffect } from "react";
import { a } from "./L1";
let ref1=React.createRef()
let ref2=React.createRef()
function V1(){
    useEffect(()=>{
        // ref1.current.value=a.state.i1
        // ref2.current.value=a.state.i2
    },[])
    return(<>
        <input type='text' ref={ref1}/>
        <input type='text' ref={ref2}/>
    </>)
}
export {V1}