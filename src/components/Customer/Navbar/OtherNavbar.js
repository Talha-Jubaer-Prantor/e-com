import React from 'react';
import { Link } from 'react-router-dom';
import "./OtherNavbar.css"

const OtherNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand" style={{backgroundColor:'cadetblue',height:"75px"}}>
  <div className="container-fluid container" style={{backgroundColor:"blueviolet",borderRadius:"10px"}}>
    <Link style={{color:"white"}} className="navbar-brand" to="/">Navbar</Link>
    
    <div className="" id="">
      <ul className="navbar-nav" >
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/cart">Cart</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" to="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default OtherNavbar;