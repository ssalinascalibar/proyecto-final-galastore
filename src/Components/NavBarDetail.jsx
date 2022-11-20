import React from 'react'

import { Link } from "react-router-dom";

//component
import GalaStoreLogo from './GalaStoreLogo';

import navBarStore from '../assets/css/navBarStore.css';

export default function NavBarStore() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand">
          <GalaStoreLogo />
        </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="search-form" role="search"> 
                <input className="form-control" type="text" placeholder="Buscar"/>
            </form>
            
        
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"><i className="fa-regular fa-user"></i><Link to="/store/miperfil" className="link">Mi cuenta</Link></li>  
            </ul>
        </div>
      </div>
    </nav>
  )
}
