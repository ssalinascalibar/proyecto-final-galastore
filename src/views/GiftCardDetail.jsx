//Vista detalle de producto

//context
import { useContext } from 'react'
import Context from '../Context';

//captura el parametro pasado por la url
import { useParams } from 'react-router-dom'

//components
import NavBarDetail from '../Components/NavBarDetail';
import CardDetail from '../Components/CardDetail';

//css
import giftCardDetail from '../assets/css/giftCardDetail.css';

export default function GiftCardDetail() {

    const { giftCards } = useContext(Context);

    // recibe el parametro id que se pasa mediante la url de navigate
    const { id } = useParams();
    console.log(id + 'id seleccionado');

    // funcion que encuentra y compara el id pasado por url con el del array
    const giftCardDetail = giftCards.find((giftCard) => giftCard.id === id);
    console.log(id + 'id pasado por url');


  return (
    <div>
      <NavBarDetail />
      <main className="main-giftDetail">
        <div className="container">
          <CardDetail giftCardDetail={giftCardDetail} />
        </div>
      </main>
    </div>
  )
}
