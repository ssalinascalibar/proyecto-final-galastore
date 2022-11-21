import React from 'react'

//img
import amazonBanner from '../assets/img/bannerCategories1.jpg';
import cocinaBanner from '../assets/img/bannerCategories2.jpg';
import perfumesBanner from '../assets/img/bannerCategories-big.jpg';

//css
import bannerCategories from '../assets/css/bannerCategories.css';

export default function BannerCategories() {
  return (
    <div>
        <div className="container">
        <h2 className="h2-banner-title">Encuentra el regalo para alguien especial</h2>
            <div className="row gx-0 my-5">
            
                <div className="col">
                    <div className="banner-img">
                        <img src={amazonBanner} alt="deportes-giftCard" />
                    </div>
                </div>
            
                <div className="col">
                    <div className="banner-text">
                        <p className="banner-p">En todas las marcas deportivas</p>
                        <h3 className="banner-h3">60% de descuento</h3>
                    </div>
                </div>

            </div>
            
            <div className="row gx-0 my-5">
            
                <div className="col">
                    <div className="banner-text cocina">
                        <p className="banner-p">En tiendas para el hogar</p>
                        <h3 className="banner-h3">Gift Cards desde $15.000</h3>
                    </div>
                </div>
                
                <div className="col">
                    <div className="banner-img cocina">
                        <img src={cocinaBanner} alt="cocina-giftCard" />
                    </div>
                </div>
            
            </div>
        
        </div>

        <div className="row">
            <div className="col">
                <div className="perfumes">
                    <div className="perfumes-text">
                        <p className="banner-p">Top 10</p>
                        <h3 className="banner-h3">Gift Cards de perfumes</h3>
                        <h3 className="banner-h3">femeninos</h3>
                    </div>
                    <img src={perfumesBanner} alt="perfume-giftCard" />
                </div>
            </div>
        </div>

    </div>
  )
}
