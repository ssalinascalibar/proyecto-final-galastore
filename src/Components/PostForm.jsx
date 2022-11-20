import React from "react";

//context
import { useContext } from "react";
import Context from "../Context";

//css
import postForm from "../assets/css/postForm.css";

export default function PostForm() {
  const { giftCards, setGiftCards, nuevoProducto, setNuevoProducto } = useContext(Context);
  
  const handleChange = e => {
    setNuevoProducto({
      ...nuevoProducto,
      id: (Math.floor(Math.random() * 100).toString(7)),
      img:"https://desafiolatam.com/assets/seo/desafiolatam_principal-031aadc574e79866fac011f0e4dae20b0d891d220e593b203b39568a495b894c.jpg",
      [e.target.name]: e.target.value,
      favorite: false,
    });
  };

  const handleSubmit = e => {
    e.preventDefault(); // para que no se recargue la pagina al momento de procesar el formulario
      setGiftCards([...giftCards, nuevoProducto]);
      console.log(giftCards)
      alert('Producto publicado con éxito, ya puede revisar tu publicación')
      setNuevoProducto('')
      console.log(nuevoProducto)
  
  }

  return (
    <form  onSubmit={handleSubmit} id="form-post">
      <div className="mb-3">
        <label htmlFor="nombreProducto" className="form-label">Nombre del Producto o marca</label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="name"
          name="name"
          value={nuevoProducto.name || ''}
          onChange={handleChange}
          placeholder="Nombre del producto"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Precio</label>
        <input
          className="form-control form-control-lg"
          type="number"
          id="price"
          name="price"
          value={nuevoProducto.price || ''}
          onChange={handleChange}
          placeholder="$precio"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Descripción</label>
        <textarea
          className="form-control form-control-lg"
          id="desc"
          name="desc"
          value={nuevoProducto.desc || ''}
          onChange={handleChange}
          rows="3"
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Publicar
      </button>
    </form>
  );
}
