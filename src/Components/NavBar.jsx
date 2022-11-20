import React from 'react'

//components
// import GalaStoreLogo from './GalaStoreLogo';
import GalaStoreLogoPublic from './GalaStoreLogoPublic';

//import css
import navBar from '../assets/css/navBar.css';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div className="navbar-brand">
          <GalaStoreLogoPublic />
        </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/login">Iniciar Sesión</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/register">Registro</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
