import { BrowserRouter as Router, Link, Route } from "react-router-dom"
import Sub1 from "./Sub1"
import Sub2 from "./Sub2"

 let G=()=>{
    return(<>
    <Router>
  <p>  Hi from G  </p> 
  <p>  <Link to='/sub1'>Sub1</Link></p>
  <p> <Link to='/Sub2'>Sub2</Link></p>
  <Route exact path='/sub1' component={Sub1}/>
  <Route exact path='/sub2' component={Sub2}/>
    </Router>
    </>)
}
export {G}