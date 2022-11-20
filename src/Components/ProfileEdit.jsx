import React, { useState } from "react";

//context
import { useContext } from "react";
import Context from "../Context";

//css
import profileEdit from "../assets/css/profileEdit.css"

export default function ProfileEdit() {
  const { setUsers, users, userLogin, setUserLogin } = useContext(Context);

  console.log(userLogin.nombre);

  const handleNameChange = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const editarUsuario = () => {
    setUsers([...users, userLogin]);
  };

  return (
    <div>
      <div className="btn-editar">
        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Editar perfil
        </button>
      </div>
      

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="form-auth">
                <h2>Edita tus datos</h2>
                <div className="mb-3 mt-4">
                  <label className="form-label">Nombre</label>
                </div>
                <input
                  className="form-control form-control-lg"
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={userLogin.nombre}
                  onChange={handleNameChange}
                  placeholder="Ingresa tu nuevo nombre"
                />
                <div className="mb-3 mt-4">
                  <label className="form-label">Correo</label>
                </div>
                <input
                  className="form-control form-control-lg"
                  type="email"
                  id="correo"
                  name="correo"
                  value={userLogin.correo}
                  onChange={handleNameChange}
                  placeholder="Ingresa tu nuevo correo"
                />
                {/* <button
                  type="button"
                  onClick={editarUsuario}
                  className="btn btn-primary"
                >
                  Editar
                </button> */}
              </form>
            </div>
            <div className="modal-footer">
              {/* <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Descartar
              </button> */}
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={editarUsuario}>
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
