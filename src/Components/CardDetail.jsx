import React from 'react'

//css
import cardDetail from '../assets/css/cardDetail.css';

export default function CardDetail({ giftCardDetail }) {
  return (
    <section className="section-cardDetail">
      <div className="row">
          <div className="col-md-5 col-lg-5" key={giftCardDetail.id}>
              <div className="img-detail">
                  <img src={giftCardDetail.img} alt={giftCardDetail.name} />
              </div>
          </div>

          <div className="col-md-7 col-lg-7">
              <div className="text-detail">
                  <h4 className="detail-name">{giftCardDetail.name}</h4>
                  <h4 className="detail-description">{giftCardDetail.desc}</h4>
                  <h4 className="detail-price">${giftCardDetail.price}</h4>
              </div>
          </div>
      </div>
    </section>
  )
}
