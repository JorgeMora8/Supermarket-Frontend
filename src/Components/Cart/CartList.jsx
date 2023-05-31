import React from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import { getContext } from '../Context/AppContext'

const CartList = ({prods}) => {

  const {clearCart} = getContext()

  function emptyCart(){ 
    clearCart()
  }

  return (
    <div className='cartListInfoContainer'>
        <h1 className='cartListTitle'>Products added to the cart</h1>
    <div className="cartProductAddedList">
      {prods.map((product) => <CartItem key={product.id} data={product} />)}
    </div>
      <div className="btnCartListContainer">
        <button className='btnEmptyCart' onClick={emptyCart}>empty cart</button>
        <button className='btnFinishPurchase'><Link to="/order">buy</Link></button>
        <button className='btnFinishPurchase'><Link to="/">keep shopping</Link></button>
      </div>
    </div>
  )
}

export default CartList