import React, { useState } from "react";

//context
import { useContext } from 'react'
import Context from "../Context";

import { useNavigate } from 'react-router-dom';

//importación de archivo axios y sus metodos
// import api from '../api/users';

//css
import authForm from "../assets/css/authForm.css";

export default function RegisterForm() {

  const navigate = useNavigate();
  
  //contexto, trae array de api users
  const { users, setUsers, registerForm, setRegisterForm, } = useContext(Context);

  // const [user, setUser] = useState({});
  
  //Variable para el registro de los usuarios
  // const [registerForm, setRegisterForm] = useState([]);

  //se asigna async a la función, para que suceda en tiempo real,
  //de lo contrario no se ve el registro inmediatamente en consola
  //y se necesita regresar a register para mostrar el objeto
  const handleChange = async e => {
    setRegisterForm({
      ...registerForm,
      id: (Math.floor(Math.random() * 100).toString()),
      [e.target.name]: e.target.value,
      isRegistered: true,
    })
    console.log(registerForm)
  }

  const handleSubmit = async e => {
    // alert('Te has registrado con exito');
    e.preventDefault(); // para que no se recargue la pagina al momento de procesar el formulario
      setUsers([...users, registerForm]);
      console.log(registerForm)
      console.log(users)
      alert('te has registrado con éxito, inicie sesión');
      setRegisterForm('');
      navigate('/login');
      console.log(users)
  
  }

  // const handleSubmit = e => {
  //   // alert('Te has registrado con exito');
  //   e.preventDefault(); // para que no se recargue la pagina al momento de procesar el formulario
  //   fetch('http://localhost:5000/users', {
  //     method: 'POST',
  //     body: JSON.stringify(
  //       // userId: Math.random().toString(36).slice(2),
  //       (registerForm)
  //       ),
  //       headers: {
  //         'Content-type': 'application/json; charset=UTF-8',
  //       },
  //     }).then((response) => { 
  //       setisAuth(true)
  //       navigate('/store')
  //     })   
  
  // }



 

  return (
    // se agrega evento submit al form
    <form onSubmit={handleSubmit} className="form-auth"> 
      <h2>Regístrate</h2>
      
      <div className="mb-3 mt-4">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="nombre"
          name="nombre"
          value={registerForm.nombre || ''}
          onChange={handleChange}
          placeholder="Nombre"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Ingresa una contraseña</label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="password"
          name="password"
          value={registerForm.password || ''}
          onChange={handleChange}
          placeholder="******"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Correo electrónico</label>
        <input
          className="form-control form-control-lg"
          type="email"
          id="correo"
          name="correo"
          value={registerForm.correo || ''}
          onChange={handleChange}
          placeholder="nombre@dominio.com"
        />
      </div>

      
      <button type="submit" className="btn btn-primary">
        Registrar
      </button>
      <hr />
    </form>
  );
}
