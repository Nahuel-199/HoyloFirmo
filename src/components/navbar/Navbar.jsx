import React from 'react';
import { FaUser } from "react-icons/fa";
import logo from "../../img/logopagina.png"
import { Link } from 'react-router-dom';
import "./nav.css";

const Navbar = () => {
  return (
    <div className='nav'>
        <div className='right-nav'>
          <Link to='/'>
          <button data-text="Awesome" className="button">
           <span className="actual-text">&nbsp;logout&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;logout&nbsp;</span>
               </button>
          </Link>
            <FaUser className='icon'/>
        </div>
        <div className='logo-nav'>
        <Link to='/'>
        <img src={logo} alt="" className='img-nav' />
        </Link>
        </div>
        </div>
  )
}

export default Navbar