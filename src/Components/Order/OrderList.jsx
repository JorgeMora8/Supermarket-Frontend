import React from 'react'
import OrderItem from './OrderItem'
import { getContext } from '../Context/AppContext'

const OrderList = () => {

    const {cartList} = getContext()


  return (
    <div className='orderItemContainer'>
        {cartList.map((product) => <OrderItem key={product.id} data={product}/>)}
    </div>
  )
}

export default OrderList