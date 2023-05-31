import React from 'react'

const OrderItem = ({data}) => {

    const {name, price, units, image} = data

  return (
    <div className='orderItem'>
        <div className="orderItemImageArea">
            <img src={image} alt="" className='orderItemImage' />
        </div>
        <div className="orderItemTextArea">
            <b className='orderItemName'>{name}</b>
            <b className='orderItemUnits'>{units} units</b>
            <b className='orderItemPrice'>{price}$ c/u</b>
        </div>
    </div>
  )
}

export default OrderItem