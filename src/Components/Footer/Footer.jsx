import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className="footerLogoArea">
            <img src="../iconWhite.png" alt=""  style={{width:"50px"}}/>
        </div>
        <div className="footerNavArea">
            <ul className='footerLinkList'>
                <li className='footerLink'><Link to="/">home</Link></li>
                <li className='footerLink'><Link to="/cart">cart</Link></li>
                <li className="nav-item dropdown footerLink">
                    <a className="nav-link navLink dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
          <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/veggies">veggies</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/chocolate">chocolate</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/flour">flour</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/butchery">butchery</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/higiene">higiene</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/fish">fish</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/category/pasta">pasta</Link></li>
            <li><Link style={{color:"#1e1e1e"}}className="dropdown-item headerNavLink" to="/">all</Link></li>

          </ul>
        </li>
            </ul>
        </div>
    </div>
    <div className="rightContainer">
        <b>2023 biomarket @ all rights reserved 2023</b>
    </div>
    </>
  )
}

export default Footer