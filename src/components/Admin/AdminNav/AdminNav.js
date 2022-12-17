import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminNav.css"

const AdminNav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand" style={{backgroundColor:'cadetblue',height:"75px"}}>
  <div className="container-fluid container" style={{backgroundColor:"blueviolet",borderRadius:"10px"}}>
    <Link style={{color:"white"}} className="navbar-brand" to="/admin/product">Navbar</Link>
    
    <div className="" id="">
      <ul className="navbar-nav" >
      <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/admin">Home</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/admin/product">My Products</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link active" aria-current="page" to="/admin/post">Post</Link>
        </li>
        <li className="nav-item">
          <Link style={{color:"white"}} className="nav-link" to="/admin/settings">Settings</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default AdminNav;