//context
import { useContext } from 'react'
import Context from '../Context';

//components
import NavBarPrivate from "../Components/NavBarPrivate";
import Heart from '../Components/Heart';

//css
import favorites from "../assets/css/favorites.css";

export default function Favorites() {

  const { giftCards, setGiftCards } = useContext(Context);

  const removeFavorito = (id) => {
    const index = giftCards.findIndex((giftCard) => giftCard.id === id);
    giftCards[index].favorite = !giftCards[index].favorite;
    setGiftCards([...giftCards]);
  };  

  return (
    <div>
      <NavBarPrivate />
      <main className="main-favoritos">
        <div className="container">
        <h3><i className="fa-solid fa-heart"></i>Mis favoritos</h3>
        {giftCards.filter((giftCard) => giftCard.favorite)
          .map((giftCard) => (
            <section className="section-favoritos" key={giftCard.id}>
              
              <div className="favoritos-content" >
                <div className="favoritos-img">
                  <img src={giftCard.img} alt={giftCard.name}></img>
                </div>
                <div className="favoritos-description">
                  <div className="favoritos-header">
                    <h4>{giftCard.name}</h4>
                    <h4>{giftCard.desc}</h4>
                  </div>
                  <div className="heart" onClick={() => removeFavorito(giftCard.id)} >
                      <Heart  filled={giftCard.favorite}/> {/*propts de Heart filled*/}
                    </div>
                  <div className="price">
                    <h4>${giftCard.price}</h4>
                  </div>
                </div>
                
              </div>  
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
