// Vista mis publicaciones
//context
import { useContext } from 'react'
import Context from '../Context';

import { useNavigate } from 'react-router-dom';

//Components
import NavBarPrivate from '../Components/NavBarPrivate';
// import ButtonDetail from '../Components/ButtonDetail'; //botón ver detalle del producto y publicación

//css
import myPosts from '../assets/css/myPosts.css';

export default function MyPosts() {

  const { giftCards } = useContext(Context);

  //useNavigate solo crea la ruta, no la vista
  const navigate = useNavigate();
  
  return (
    <div> 
      <NavBarPrivate />
      <main className="main-myPosts">
        <div className="container">
        <h3><i className="fa-solid fa-envelope"></i>Mis publicaciones</h3>
            {giftCards.map(giftCard =>
              <section className="section-myPosts" key={giftCard.id}>
                
                <div className="myPosts-img">
                  <img src={giftCard.img} alt={giftCard.name}></img>
                </div>
                <div className="myPosts-description">
                  <h4>{giftCard.name}</h4>
                  <h4>{giftCard.desc}</h4>
                  <h3>${giftCard.price}</h3>
                </div>
                <div className="button-box">
                <button type="button" className="btn btn-verDetalle" onClick={() => navigate(`/store/giftcard/${giftCard.id}`)}>Ver detalle</button>
                  {/* <ButtonDetail giftCard={giftCard}/> */}
                </div>
              </section>
            )}
          </div>
      </main>
    </div>
  )
}
