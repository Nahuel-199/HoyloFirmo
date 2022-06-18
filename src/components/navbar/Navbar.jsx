import React from 'react';
import { FaUser } from "react-icons/fa";
import logo from "../../img/logonav.png";
import { Link } from 'react-router-dom';
import "./nav.css";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='right-nav'>
          <Link to='/'>
            <button className='btn-nav'>Logout</button>
          </Link>
            <FaUser className='icon'/>
        </div>
        <div className='logo-nav'>
        <img src={logo} alt=""  className='img-nav'/>
           <span className='hoy'>Hoy se firma</span>
        </div>
        </div>
  )
}

export default Navbar