import React from 'react'

//context
import { useContext } from 'react'
import Context from "../Context";

import { useNavigate } from 'react-router-dom';

//css
import logOut from '../assets/css/logOut.css';

export default function LogOut() {
    const { logOut } = useContext(Context);
    const navigate = useNavigate();
  return (
    <button type="button" className="btn btn-logout" onClick={({logOut}) => navigate(`/login`)}><i className="fa-solid fa-right-from-bracket"></i></button>
  )
}
