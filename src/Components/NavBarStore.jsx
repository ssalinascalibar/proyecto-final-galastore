import React from 'react'

import { Link } from "react-router-dom";

//component
import GalaStoreLogo from './GalaStoreLogo';
import LogOut from './LogOut';

//css
import navBarStore from '../assets/css/navBarStore.css';

export default function NavBarStore({buscarProducto, setBuscarProducto}) {

  const filtrarProducto = (e) => {
    setBuscarProducto(e.target.value);
    console.log(buscarProducto);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <div className="navbar-brand">
          <GalaStoreLogo />
        </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="search-form" role="search"> 
                <input onChange={filtrarProducto} value={buscarProducto} className="form-control" type="text" placeholder="Buscar por nombre o marca"/>
            </form>
            
        
            <ul className="navbar-nav mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/store/miperfil" className="link"><i className="fa-regular fa-user"></i>Mi cuenta</Link></li>  
                {/* <li className="nav-item"><i className="fa-regular fa-user"></i><Link to="/miperfil/favoritos" className="link">Ver favoritos</Link></li>   */}
            </ul>
            <LogOut />
        </div>
      </div>
    </nav>
  )
}
