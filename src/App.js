import logo from './logo.svg';
import './App.css';

import Home from './components/Home';
import Dir from './components/Dir';
import {Link, Route, Switch} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Register from './components/Register';
import Public from './components/Public';

import { NavLink } from 'react-router-dom';

import Click from './components/Click';
import HoverCounter from './components/HoverCounter';
import Formex from './components/Formex';
import New1 from './components/New1';
import New2 from './components/New2';
import Likes from './components/Likes';
import updatedcomp from './components/Hoc';
import Comment from './components/Comment';
import Products from './components/Products';
import Cart from './components/Cart';
import User from './components/User';
import Jewel from './components/Jewel';
import Comp1 from './components/Comp1';
import { Comp2 } from './components/Comp2';
import Love from './components/Love';
import Fs from './components/Fs';
import Regi from './components/Sus';
import Lol from './components/Lol';
import Md from './components/Md';
import Nw from './components/Nw';
import Net from './components/Net';
import Val from './components/Val';
import Val2 from './components/Val2';
import D1 from './components/D1';
import D5 from './components/D5';
import fun from './components/D101';
import D15 from './components/D15';
import Brow from './components/D18';
import Profile1 from './components/D19';
import { Regis } from './components/D20';
import Login from './components/D21';
import DashBoard from './components/D22';
import { R1 } from './components/D23';
import V from './components/L1';
import { Da } from './components/Da';
import { F } from './components/D24';
import { Link1 } from './components/Link1';
import { Link2 } from './components/Link2';
import { Link3 } from './components/Link3';
import Registration from './components/D25';
import Log from './components/D26';
import { V1 } from './components/V1';
import D30 from './components/D30';
import D31 from './components/D31';
import Comp12 from './components/D31';
import { Test } from './components/Test1';
import { G } from './components/G';
import { Delete } from './components/Delete';
import Mine from './components/Mine';
import { To } from './components/To';
import Sub2 from './components/Sub2';




function App() {
  let obj1={
    nam:'Akash',
    ag:23,
    fun:function (){
      return `${this.nam}---${this.ag}`
    }
   }
   let {nam,...p}=obj1
   console.log(nam);

   
  return (
    <div className="App">
    
    {/* <Router>
    <div>
      <Link to='/Formex'>Click</Link>
      <br/>
      <a href='https://www.netflix.com/browse'>netflix</a>
    </div>
      <Route exact path='/Formex' component={Formex}/>
    </Router> */}
      {/* <Router>
       <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to="/" style={{color:"violet"}}>Public</Link>
        </li>
        <li> 
         <NavLink to="/login" activeStyle={{
              fontWeight: "bold",
              color: "green",
              backgroundColor:"blue"
            }}>
           LOGIN
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            activeStyle={{
              fontWeight: "bold",
              color: "red",
              backgroundColor:"yellow"
            }}
          >
            DASHBOARD
          </NavLink>
        </li>
      </ul>
      <hr/>
      <Route exact path="/" component={Public}/>
      <Route  path="/login" component={Login} />
      <Route  path="/dashboard" component={Home} />
      </Router>
         */}
      {/* <Click/>
      <HoverCounter/>
      <New1/> */}
{/*     
   <Likes other="Soumya's" />
   <br/>
    <Comment nm="Shila's" so='Facebook' {...p} />
    <br></br>
    <Love nam="Soumya's"/>
    <Lol/> */}
    {/* <Router>
                     
    <Route exact path="/" component={Products}></Route>
   
    <Route path="/Cart" component={Cart}></Route>
    <Route path="/User" component={User}></Route>
    <Route path="/Jewel" component={Jewel}></Route>
    </Router> */}
{/* <Comp1/> */}
 {/* <Fs/> */}
 {/* <Md/>
  <Regi {...obj}/>
  <Nw {...obj}/> */}
{/* <Net/> */}
{/* <Router>
<Route exact path='/' component={Val}/>
        <Route path='/Val2' component={Val2}/>
    </Router> */}
 {/* <D5/>
 <Net/> */}
{/* <Router>
<W/>

<Switch>
  {/* <Route component={D15} exact path='/'></Route>
  <Route component={D16} exact path='/Log'></Route>
  <Route component={W} exact path='/Browse'></Route>
  <Route exact path='/User' component={User}/>
   <Route exact path='/Cart' component={Cart}/>
  <Route exact path='/Jewel' component={Jewel}/>  */}
  
 {/* </Switch> */}
{/* // </Router> */} 
<Router>
<F  />
<Route exact path='/login' component={Login}/>
<Route exact path='/products/:id' component={Sub2}/>
  <Route exact path='/' component={Products}/>                 
    <Route exact path='/User' component={User} />      
             {/* content with bootstrap */}
   <Route exact path='/Cart' component={Cart}/>
  <Route exact path='/Jewel' component={Jewel}/> 
  
  
</Router>
{/* Hello there */}

{/* <Router>
  <Registration/>
  <Route exact path='/Reg' component={Registration}/>
  <Route exact path='/log' component={Log}/>
</Router> */}
  
  {/* <Delete/> */}
  {/* <Router>
  <Mine/>
  <Route exact path='/to/:id' component={To}/>
  </Router> */}
     
  {/* <Router>
  <Test/><br/>
    <Route exact path="/path1" component={G}/>

  </Router> */}
   
    </div>
  );
}


export default App;
