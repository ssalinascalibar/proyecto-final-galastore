import { useState } from "react";

//context
import { useContext } from 'react'
import Context from '../Context';

//components
import NavBarStore from '../Components/NavBarStore';
import Header from '../Components/Header';
import Card from '../Components/Card';
import BannerCategories from '../Components/BannerCategories';

//css
import store from '../assets/css/store.css';

export default function Store() {

  const [buscarProducto, setBuscarProducto] = useState('');
  const [sort, setSort] = useState('');

  const { giftCards, setGiftCards, favorite, setFavorite } = useContext(Context);

  return (
    <div>
      <NavBarStore buscarProducto={buscarProducto} setBuscarProducto={setBuscarProducto} />
      <Header />
      <main className="main-store">
        <div className="container">
          <Card buscarProducto={buscarProducto} sort={sort} setSort={setSort} setGiftCards={setGiftCards} favorite={favorite} setFavorite={setFavorite}/>
        </div>
      </main>
      <section className="section-banner">
        <BannerCategories />
      </section>
    </div>
  )
}
