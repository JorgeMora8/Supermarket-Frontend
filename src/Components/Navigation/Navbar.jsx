import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbarContainer">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="../iconWhite.png" style={{width:"40px"}} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <Link className='nav-link navLink text-white headerNavLink' to="/">home</Link>
        </li>
        <li className="nav-item">
            <Link className='nav-link navLink text-white headerNavLink' to="/cart">cart</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link navLink dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item headerNavLink" to="/category/veggies">veggies</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/chocolate">chocolate</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/flour">flour</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/butchery">butchery</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/higiene">higiene</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/fish">fish</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/category/pasta">pasta</Link></li>
            <li><Link className="dropdown-item headerNavLink" to="/">all</Link></li>

          </ul>
        </li>
      </ul>

    </div>
    <span className='messageTagNavBar'>"Ready to serve you..."</span>
  </div>
</nav>
  )
}

export default Navbar