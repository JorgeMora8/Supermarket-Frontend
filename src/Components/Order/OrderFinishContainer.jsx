import React, { useState } from 'react'
import OrderForm from './Modal/OrderForm';
import OrderFinished from './Modal/OrderFinished';
import { getContext } from '../Context/AppContext';
import axios from "axios"

const FinishPurchase = () => {


  const [orderFinished, setOrderFinished] = useState(false)
  const {cartList, clearCart} = getContext()

  function orderDone(firstNameUser, lastNameUser, EmailUser){ 
    

    // //Make the order
    axios.post('http://localhost:8080/api/order', {
      cart: cartList,
      firstName:firstNameUser,
      email:EmailUser,
      lastname:lastNameUser,
    })

    setOrderFinished(true)

    clearCart()
  }



  return (
    <>
    <div className="imgFormPurchaseContainer">
      <div className="logoImgPurchaseArea">
      <img src="../logo.png" style={{width:"200px"}} alt="" />
      </div>
    </div>

    {orderFinished ?  <OrderFinished /> : <OrderForm orderDone={orderDone}/>}
    </>
  )
}

export default FinishPurchase