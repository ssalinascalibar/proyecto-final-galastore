import React from 'react'

export default function ModalEditForm() {
  return (
      <div>
    {/* //  Button trigger modal  */}
{/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form className="form-auth">
      <h2>Perfil del usuario</h2>
      <div className="mb-3 mt-4">
        <label className="form-label">Nombre</label>
        {/* <input
          className="form-control form-control-lg"
          type="text"
          id="nombre"
          name="nombre"
          value={userLogin.nombre}
            onChange={handleNameChange}
            placeholder="Ingresa tu nombre"
        /> */}
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
        <input
          className="form-control form-control-lg"
          type="email"
          id="correo"
          name="correo"
          value={userLogin.correo}
          onChange={handleNameChange}
          placeholder="Ingresa tu nuevo correo"
        />
      <button type="button" onClick={editarUsuario} className="btn btn-primary">
        Editar
      </button>
    </form>
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  )
}
