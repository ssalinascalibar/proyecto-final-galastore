import React, { useState } from "react";

//context
import { useContext } from "react";
import Context from "../Context";

//css
import authForm from "../assets/css/authForm.css";

import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  //contexto, trae array de api users y la funcion de estado de autenticación = false
  const { users, isAuth, setisAuth, loginForm, setLoginForm, userLogin, setUserLogin } = useContext(Context);

  const navigate = useNavigate();
  
  //Variable para el inicio de sessión de los usuarios
  // const [loginForm, setLoginForm] = useState({});

  const handleChange = async e => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value.toLowerCase(),
    })
    console.log(loginForm)
    
  }

  const handleSubmit = async e => {
    // alert('Te has registrado con exito');
    e.preventDefault(); 
      // setUsers([...users, registerForm]);
      // alert('te has registrado con éxito, incie sesión');
      // setRegisterForm('');
      // navigate('/login');
      const userExist = users.some((u) => u.correo == loginForm.correo );
      const validateCorreo = !users.correo == !loginForm.correo 
      
      if (userExist){
        setisAuth(true);
        setUserLogin(loginForm);
        console.log(isAuth)
        alert('Bienvenido/a ' + loginForm.nombre.toLocaleUpperCase() + ' a GalaStore');
        navigate('/store');
        setLoginForm('')
        
      } else if (validateCorreo) {
        //esto ocurre cuando no llenamos el campo e intentamos logearnos
        alert('debes ingresar un correo')
      } else {
        alert('Upss! ha ocurrido algo, debes registrarte');
        navigate('/register');
      }
    }


  return (
    <form onSubmit={handleSubmit} className="form-auth">
      <h2>Inicia sesión con tu correo</h2>
      <div className="mb-3 mt-4">
        <label className="form-label">Nombre</label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="nombre"
          name="nombre"
          value={loginForm.nombre || ''}
          onChange={handleChange}
          placeholder="Ingresa tu nombre"
        />
      </div>
      <div className="mb-3 mt-4">
        <label className="form-label">Correo electrónico</label>
        <input
          className="form-control form-control-lg"
          type="email"
          id="correo"
          name="correo"
          value={loginForm.correo || ''}
          onChange={handleChange}
          placeholder="nombre@dominio.com"
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Iniciar sesión
      </button>
      <hr />
    </form>
  );
}
