import React from 'react'
import { Link } from 'react-router-dom'

const FinishDetailBtn = () => {
  return (
    <>
    <button className='btnDetailGoCart'><Link to="/cart">cart</Link></button>
    <button className='btnDetailGoShopping'><Link to="/">Go Shopping</Link></button>
    </>
  )
}

export default FinishDetailBtn