import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className='emtpyCartContainer'>
        <b className="emptyCartTitle">No products in cart</b>
        <button className='btnFinishPurchase'><Link to="/">keep shopping</Link></button>
    </div>
  )
}

export default EmptyCart