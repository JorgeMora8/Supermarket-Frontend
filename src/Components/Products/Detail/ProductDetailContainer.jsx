import React, { useEffect, useState } from 'react'
import ProductDetail from './ProductDetail'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../../Loading/Loading'

const ProductDetailContainer = () => {

  const {id} = useParams()
  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{ 
    axios.get(`https://supermarket-api-iz37.onrender.com/api/products/${id}`)
    .then((resp) => resp.data)
    .then((resp) => setProduct(resp))
    .then((resp) => setLoading(false))
    .catch((error) => console.log(error))
  }, [])

  return (
    <div>
        {loading ? <Loading />  :<ProductDetail data={product}/>}
    </div>
  )
}

export default ProductDetailContainer