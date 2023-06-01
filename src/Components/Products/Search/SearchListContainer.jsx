import React, { useEffect, useState } from 'react'
import ProductItem from "../ProductItem.jsx"
import axios from 'axios'
import ProductNotFound from '../../NotFound/ProductNotFound.jsx'

const SearchListContainer = ({productName, goBack}) => {


  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=> { 
    axios.get(`https://supermarket-api-iz37.onrender.com/api/products/search/${productName}`)
    .then((resp) => resp.data)
    .then((resp) => setProduct(resp))
    .then((resp) => setLoading(false))
    .catch((error) => console.log(error))
  }, [productName])


  return (
    <>
    <div className="btnBackContainer">
      <button className='btnBackProductList' onClick={goBack}>go back</button>
    </div>



    <div className="productSearchContainer">
      {loading ? 
      <h2>loading</h2> : 
      product == false ? 
      <ProductNotFound /> : 
        product.map((product) => <ProductItem key={product.id} data={product}/>)
      }
      </div>
    </>
  )
}

export default SearchListContainer