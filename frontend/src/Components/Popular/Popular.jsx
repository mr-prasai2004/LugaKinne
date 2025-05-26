import React from 'react'
import './Popular.css'
import data_product from '../Assets/data'
export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in Women</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((item)=>{
                return <Item/>
            })}
        </div>
    </div>
  )
}
