import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import axios from "axios"
import Loading from '../Loading/Loading'


const ProductList = ({category}) => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    setLoading(true) 
    if (category == undefined){
    axios.get("https://supermarket-api-iz37.onrender.com/api/products")
    .then((resp) => resp.data)
    .then((resp) => setProducts(resp))
    .then((resp) => setLoading(false))
    .catch((error) => console.log(error))
    }
    else { 
      axios.get(`https://supermarket-api-iz37.onrender.com/api/products/category/${category}`)
      .then((resp) => resp.data)
      .then((resp) => setProducts(resp))
      .then((resp) => setLoading(false))
      .catch((error) => console.log(error)) 
    }
  }, [category])

  console.log(products)

  return (
    <>
    <div className="productListImageContainer">
      <div className="productListImageArea">
      <b>{category ? category : "Products"}</b>
      </div>
    </div>
    <div className='ProductListContainer'>
        {loading? <Loading /> : products.map((product) => <ProductItem key={product.id} data={product}/>)}
    </div>
    </>
  )
}

export default ProductList