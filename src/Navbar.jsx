
import {NavLink } from "react-router-dom";

import "./Navbar.css";
const Navbar =()=>{
    return(
        <div>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">User App</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <NavLink to="/">Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
        <NavLink to="/adduser">Adduser</NavLink>
      </li>
     
     
    </ul>
  </div>
</nav>
        </div>
     
    )
}

export default Navbar;