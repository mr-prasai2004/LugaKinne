import React from 'react'
import './NewLetter.css'
export const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers on Your Mail</h1>
        <p>
        Subscribe to our NewsLetter and Stay Updated
        </p><div>
            <input type="email" placeholder="Your Email ID" />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
