import React from 'react'
import {Link} from "react-router-dom"

const ProductItem = ({data}) => {
    const {name, price, category, image, description, units, id} = data
  return (
    <div className='productItem'>
        <div className="productImageArea">
            <img src={image} style={{width:"120px"}} alt="" />
        </div>
        <div className="productTextArea">
            <b className='productTextName'>{name}</b>
            {/* <p className='productTextDescription'>{description.slice(0, 30)}...</p> */}
            <span className="productTextUnits">({units} units avaliable)</span>
            <p className='productTextCategory'>{category}</p>
            <div className="productTextPriceArea">
            <b className='productTextPrice'>{price}$</b>
            <button className='btnViewDetailProduct'>
              <Link to={`/detail/${id}`}>detail</Link>
            </button>
            </div>
            
        </div>
    </div>
  )
}

export default ProductItem