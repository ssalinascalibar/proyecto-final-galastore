import React from 'react'
import { Link } from "react-router-dom";

//css
import galaStoreLogo from '../assets/css/galaStoreLogo.css';

export default function GalaStoreLogoPublic() {
  return (
    <div className="logo-gala">
        <i className="fa-solid fa-cat"></i>
        {/* <p>GalaStore</p> */}
        <Link to="/" className="link"><p>GalaStore</p></Link>
    </div>
  )
}
