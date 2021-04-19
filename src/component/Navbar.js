import React from 'react';
import {Link, NavLink} from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <NavLink className="navbar-brand "  to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <NavLink className="nav-link"   exact to="/">Home</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link " exact to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link " exact to="/contact">Contact</NavLink>
      </li>
    </ul>
          <Link to='/user/addUser' className="btn btn-outline-light">Add User</Link>
  </div>
</nav>
        </div>
    );
};

export default Navbar;