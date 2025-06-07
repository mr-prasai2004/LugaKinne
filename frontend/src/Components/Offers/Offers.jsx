import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offer-left">
            <h1>Exclusive Offer</h1>
            <h1>Offer For You</h1>
            <p>Only on Best Selling Product</p>
            <button>Check Now</button>
        </div>
        <div className="offer-right">
            <img src={exclusive_image} alt="" />

        </div>
    </div>
  )
}
