import React, { useState } from 'react'
import { getContext } from '../Context/AppContext'
import OrderList from './OrderList'
import { Link } from 'react-router-dom'

const OrderListContainer = () => {

  const {totalPrice} = getContext()
  const [total, setTotal] = useState(totalPrice())

  return (
      
    <>
    <div className='orderListContainer'>
        <div className="orderInfoContainer">
          <b className='orderInfoTitle'>Purchase Info</b>
          <p className='orderInfoText'>Here itll be reflected all the products added and the total price</p>
          <b className='orderInfoFinalPrice'>total price: {total}$</b>
          <button className='OrderBtnBuyBtn'><Link to="/order/finish">buy</Link></button>
        </div>
        <OrderList />
    </div>
    </>
  )
}

export default OrderListContainer