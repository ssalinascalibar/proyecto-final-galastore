import Context from "../Context";
import { useContext } from "react";

//navigate para renderizar vista
import { useNavigate } from 'react-router-dom';

//css
import card from '../assets/css/card.css';
import buttonDetail from '../assets/css/buttonDetail.css';

//components
// import ButtonDetail from './ButtonDetail'; // botón ver detalle de producto y publicación
import Heart from '../Components/Heart'; //svg corazón favoritos

export default function Card({ buscarProducto, sort, setSort }) {

  const { giftCards, setGiftCards } = useContext(Context);

  //useNavigate solo crea la ruta, no la vista
  const navigate = useNavigate();

  // esta función recibe el id de cada elemento y actuliza la propiedad liked a true si es que se marca cada foto
  const addFavorites = (id) => {
    //se busca por indice y se compara id de cada elemento giftcard con el id seleccionado en el onClick
    const index = giftCards.findIndex((giftCard) => giftCard.id === id);
    giftCards[index].favorite = !giftCards[index].favorite; // ya obtenido el nº de indice [index] del arreglo giftcards, se transforma .liked a true, ya que el original es false
    setGiftCards([...giftCards]); // se actualiza el array de giftcards con los cambios realizado a un nuevo array de giftcards
  }
  

  return (
    <section className="section-cards">
      <div className="row gy-4">
        <h2>Tenemos una gran variedad de Gift Cards para ti</h2>
        <div className="sort-button">
          <button onClick={() => setSort('1')} type="button" className="btn btn-dark">Por orden descendente</button>
          <button onClick={() => setSort('0')} type="button" className="btn btn-dark">Por orden ascendente</button>
        </div>
        {giftCards.filter((e) => {
          if(buscarProducto === '') {
              return e;
          } else if (e.name.toLocaleLowerCase().startsWith(buscarProducto.toLocaleLowerCase())
          ) {
              return e;
          }
          }).sort((e, e2) => {
              if (sort === '1')
                  return (e.name > e2.name)?1:((e.name < e2.name)?-1:0)
              else if (sort === '0')
                  return (e.name < e2.name)?1:((e.name > e2.name)?-1:0)
          }
          )
          .map(giftCard => 
              <div className="col-md-3 col-6" key={giftCard.id} >
                  <div className="card" >
                    <img src={giftCard.img} className="card-img-top" alt={giftCard.name}></img>    
                    <div className="card-body">
                    <div className="heart" onClick={() => addFavorites(giftCard.id)}>
                      <Heart filled={giftCard.favorite} /> {/*propts de Heart filled*/}
                    </div>
                      <h5 className="card-title">{giftCard.name}</h5>
                      <p className="card-text">${giftCard.price}</p>
                      
                      <button type="button" className="btn btn-verDetalle"  onClick={() => navigate(`/store/giftcard/${giftCard.id}`)}>Ver detalle</button>
                      {/* <ButtonDetail giftCard={giftCard}/> */}
                    </div>   
                  </div>
              </div>
          )}
      </div>
    </section>
  )
}
