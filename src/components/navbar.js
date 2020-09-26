import React from 'react';
import {Link,NavLink,withRouter} from "react-router-dom"


const Navbar =()=>{
  return(
    <nav className="navMenu">
      <NavLink className="navItem" to="/Home">Home</NavLink>
      <NavLink className="navItem" to="/About">About</NavLink>
      <NavLink className="navItem" to="/Contact">Contact</NavLink>
    </nav>
  )
}
export default withRouter(Navbar);
