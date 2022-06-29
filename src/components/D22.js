import { Redirect } from "react-router-dom"

function DashBoard(){
    if(localStorage.getItem('Token')){
        return(<>
            <p>Success</p>
        </>)
    }
    else{
        return(<><Redirect to='/'></Redirect></>)
    }
}
export default DashBoard;