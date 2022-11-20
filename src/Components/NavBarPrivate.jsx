import React from "react";
import { Link } from "react-router-dom";

//components
import GalaStoreLogo from "./GalaStoreLogo";
import LogOut from "./LogOut";

//css
import navBarPrivate from "../assets/css/navBarPrivate.css";

export default function NavBarPrivate() {
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-brand">
          <GalaStoreLogo />
        </div>
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          data-bs-scroll="true"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              <GalaStoreLogo />
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
          <LogOut />
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item"><i className="fa-regular fa-user"></i><Link to="/store/miperfil" className="link">Ver perfil</Link></li>
              <li className="nav-item"><i className="fa-regular fa-heart"></i><Link to="/store/miperfil/favoritos" className="link">Mis favoritos</Link></li>
              <li className="nav-item"><i className="fa-regular fa-envelope"></i><Link to="/store/miperfil/mispublicaciones" className="link">Mis publicaciones</Link></li>
              <li className="nav-item"><i className="fa-regular fa-paper-plane"></i><Link to="/store/miperfil/publicar" className="link">Publicar</Link></li>
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
