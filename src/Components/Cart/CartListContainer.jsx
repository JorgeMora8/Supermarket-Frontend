import React from 'react'
import CartList from './CartList'
import EmptyCart from './EmptyCart'
import { getContext } from '../Context/AppContext'

const CartListContainer = () => {

  const {cartList} = getContext()

  return (
    <>
    <div className="cartImageContainer">
      <div className="cartImageArea">
        <b>cart</b>
      </div>
    </div>
    <div className='cartListContainer'>
      {cartList.length != 0 ? <CartList prods={cartList}/>:<EmptyCart />}
    </div>
   </>
  )
}

export default CartListContainer