import React, { useState } from 'react'
import ItemCount from '../../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { getContext } from '../../Context/AppContext'
import FinishDetailBtn from '../../ItemCount/FinishDetailBtn'

const ProductDetail = ({data}) => {

  const {name, price, description, stock, image, category} = data
  const [count, setCount] = useState(1)
  const [finish, setFinish] = useState(false)
  const { addProductInCart } = getContext()

    function onAdd(){ 
        setCount(count + 1)
    }

    function onRemove(){ 
        if(count > 1)setCount(count - 1)
    }

    function onSave(){ 
        const saveProductCart = {...data, units:count}
        setFinish(true)
        addProductInCart(saveProductCart)
    }




  return (
    <>
    <div className='productItemContainer'>
      <div className='productItemImageArea'>
        <img src={image} className='itemDetailImage' alt="" />
      </div>
      <div className='productItemTextArea'>
        <b className='productDetailName'>{name}</b>
        <p className='productDetailDescription'>{description}.</p>
        <b className='productDetailCategoryLine'>Categoria: <span className='productDetailCategory'>{category}</span></b>
        <b className="productDetailPrice">{price}$</b>
        <b className='productDetailCount'>{count} units </b>
        { finish ?  <FinishDetailBtn />  : <ItemCount onAdd={onAdd} onRemove={onRemove} onSave={onSave}/> }
  
      </div>
    </div>

    
      
    </>
  )
}

export default ProductDetail




{/* <b className='relatedProductTitle'>Productos relacionados</b>
      <div className="relatedProductContainer">
      <div className='productItem'>
        <div className="productImageArea">
            <img src="https://th.bing.com/th/id/OIP.2wMeOhGiypB5b_v82DJczAHaHa?pid=ImgDet&rs=1" style={{width:"150px"}} alt="" />
        </div>
        <div className="productTextArea">
            <b className='productTextName'>Gatorade Orange 250ml</b>
            <span className="productTextUnits">(20 units avaliable)</span>
            <p className='productTextCategory'>bebidas</p>
            <div className="productTextPriceArea">
            <b className='productTextPrice'>20$</b>
            <button className='btnViewDetailProduct'>detail</button>
            </div>
            
        </div>
    </div> */}
{/* 
    <div className='productItem'>
        <div className="productImageArea">
            <img src="https://th.bing.com/th/id/OIP.2wMeOhGiypB5b_v82DJczAHaHa?pid=ImgDet&rs=1" style={{width:"150px"}} alt="" />
        </div>
        <div className="productTextArea">
            <b className='productTextName'>Gatorade Orange 250ml</b>
            <span className="productTextUnits">(20 units avaliable)</span>
            <p className='productTextCategory'>bebidas</p>
            <div className="productTextPriceArea">
            <b className='productTextPrice'>20$</b>
            <button className='btnViewDetailProduct'>detail</button>
            </div>
            
        </div>
    </div> */}

    {/* <div className='productItem'>
        <div className="productImageArea">
            <img src="https://th.bing.com/th/id/OIP.2wMeOhGiypB5b_v82DJczAHaHa?pid=ImgDet&rs=1" style={{width:"150px"}} alt="" />
        </div>
        <div className="productTextArea">
            <b className='productTextName'>Gatorade Orange 250ml</b>
            <span className="productTextUnits">(20 units avaliable)</span>
            <p className='productTextCategory'>bebidas</p>
            <div className="productTextPriceArea">
            <b className='productTextPrice'>20$</b>
            <button className='btnViewDetailProduct'>detail</button>
            </div>
            
        </div>
    </div> */}

    {/* <div className='productItem'> */}
        {/* <div className="productImageArea">
            <img src="https://th.bing.com/th/id/OIP.2wMeOhGiypB5b_v82DJczAHaHa?pid=ImgDet&rs=1" style={{width:"150px"}} alt="" />
        </div>
        <div className="productTextArea">
            <b className='productTextName'>Gatorade Orange 250ml</b>
            <span className="productTextUnits">(20 units avaliable)</span>
            <p className='productTextCategory'>bebidas</p>
            <div className="productTextPriceArea">
            <b className='productTextPrice'>20$</b>
            <button className='btnViewDetailProduct'>detail</button>
            </div>
            
        </div>
    </div>
    </div> */}