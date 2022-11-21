import React from 'react'

//components
import NavBar from '../Components/NavBar';

//img
import bkgHome from '../assets/img/bkg-home.jpg';

//css
import home from '../assets/css/home.css';

export default function Home() {
  return (
    <div>
      <NavBar />
      <main className="main-home">
        <img src={bkgHome} alt="MarketPlace" />
        <div className="text-home">
          <p>BIENVENIDO A</p>
          <h1>GalaStore</h1>
        </div>
          <div className="text-home-1">
            <p>Convierte tus <br/>productos en</p>
            <hr />
            <h2>Gift Cards</h2>
          </div>
          <div className="text-home-2">
            <p>Publica tu marca!</p>
            <p>y llega a mas personas</p>
          </div>
          
          
      </main>
    </div>
  )
}
