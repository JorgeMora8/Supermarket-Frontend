import React from 'react'
import { getContext } from '../../Context/AppContext'

const OrderFinished = () => {



  return (
    <div>
        <div className="imageOrderFinishHeader">
            <div className="imageOrderFinisArea">
            <h1>Thanks... the order is done</h1>
            </div>
        </div>

        <div className="orderFinishedMessageContainer">
            <div className="orderMessageArea">
                <img src="../logo.png" style={{width:"150px"}} alt="" />
                <h2>In 3hrs youll have your order right in your front door</h2>
            </div>
        </div>
    </div>
  )
}

export default OrderFinished