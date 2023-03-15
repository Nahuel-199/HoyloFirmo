import React from 'react'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-router-dom'
import "./project.css";

const Project = () => {
  return (
      <div>
       <Navbar/>
       <div className='container-projects'>
        <div className="container_wave">
       <div className="wave wave1"></div>
             <div className="wave wave2"></div>
             <div className="wave wave3"></div>
             <div className="wave wave4"></div>
             </div>
           <span className="title-project">Sus empresas</span>
           <div className="items-container">
            <li className='titles'>
              <Link to="/dashboard">
                <span className="title-projects">ARXivar</span>
                <span className="title-projects">Challenge</span>
                <span className="title-projects">Creatio</span>
                <span className="title-projects">Estudio Volpe Inglese & Asoc.2</span>
                </Link>
             </li>
           </div>
        </div>
   </div>
  )
}

export default Project