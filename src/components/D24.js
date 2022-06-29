import React from "react";
import react from "react";
import { Link, withRouter } from "react-router-dom";
class F extends React.Component{
     search=(e)=>{
       var id=document.getElementById('src').value;
       if(id==='Jewel'){
        this.props.history.push('/Jewel');
       }
    }
    render(){
    
  return(<>

{/* <!DOCTYPE html> */}
{/* <html lang="en"> */}

{/* <head> */}
  {/* <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- displays site properly based on user's device -->

  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">

  <title>Frontend Mentor | Intro section with dropdown navigation</title>

  <link rel="stylesheet" href="style.css">
  <script src="script.js" defer></script>
</head> */}


  {/* <!-- menu button --> */}
  {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>Logo</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/Cart'>Cart</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to='/User' >Users</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select by Catagory
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to='/Jewel'>Jewelery</Link></li>
            <li><a class="dropdown-item" href="#">Electronics</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Mens'and womens' wear</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" id="src"/>
        <button class="btn btn-outline-success" type="button" onClick={this.search}>Search</button>
      </form>
    </div>
  </div>
</nav> */}
  <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
        
        
      
            <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
            
        </div>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light shadow-3 p-4">
            <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
            <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
            <button class="btn btn-link btn-block m-0">Link 3</button>
        </div>
    </div>



  </>)
    }
}
export {F}

// <ul>
//       <li>
//       <Link to='/'><h1>Logo</h1></Link></li>
//           <li>
//               <Link to='/User'>List of users</Link>
//           </li>
//           <li>
//               <Link to='/Cart'>Cart info</Link>
//           </li>
//           <li>
//               <Link to='/Jewel'>Jewelery</Link>
//           </li>
//       </ul>
// -----------------------copied------
