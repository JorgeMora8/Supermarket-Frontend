import React from 'react'
import { getContext } from '../Context/AppContext'

const CartItem = ({data}) => {

  const {image, name, units, price, id} = data
  const {addProductItem, removeProductItem} = getContext()

  function removeOne(){
    removeProductItem(id)
  }

  function addOne(){ 
    addProductItem(id)
  }
  

  return (
    <div className='cartProductItem'>
      <img src={image} style={{width:"70px"}} alt="" />
      <b className='cartProductItemName'>{name}</b>
      <b className='cartProductItemUnits'>
            <button className='btnRemoveProductUnitCart' onClick={removeOne}>-</button>
              <span className='cartItemUnits'>{units}</span> 
            <button className='btnAddProductUnitCart' onClick={addOne}>+</button></b>
      <b className='cartProductItemPrice'>{price}$ C/U</b>
    </div>
  )
}

export default CartItem