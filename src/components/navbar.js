import React from 'react';
import {NavLink,Link,withRouter} from 'react-router-dom';


const Navbar =()=>{
  return(
    <nav className="navMenu" role="nav">
      <NavLink className="navItem" to="/StoreFront">Store</NavLink>
      <NavLink className="navItem" to="/About">About</NavLink>
      <NavLink className="navItem" to="/Contact">Contact</NavLink>
    </nav>
  )
}
export default withRouter(Navbar);
