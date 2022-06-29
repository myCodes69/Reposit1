import axios from "axios";
import { useEffect, useState } from "react"

function Sub2(props){
    const iId=props.match.params.id
    let [itemDetails,setDetails]=useState({})
   console.log(props);
   useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${iId}`).then(r=>{
        console.log(r.data);
        setDetails(r.data)
    })
   },[])
    return(<> {iId} ----
    {itemDetails.title}
    </>)
}
export default Sub2