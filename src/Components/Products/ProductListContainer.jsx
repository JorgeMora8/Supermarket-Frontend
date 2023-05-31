import React, { useState } from 'react'
import ProductList from './ProductList'
import { useParams } from 'react-router-dom'
import { getContext } from '../Context/AppContext'
import SearchListContainer from './Search/SearchListContainer'
import FormSearch from './Search/FormSearch'
import { CategorySearch } from '../Navigation/CategorySearch'
import ReviewItem from '../Reviews/ReviewItem'
import ReviewListContainer from '../Reviews/ReviewListContainer'

const ProductListContainer = () => {

  const {category} = useParams()
  const [search, setSearch] = useState(false)
  const {searchName, setSearchName} = getContext()


  function handleSubmit(e){ 
    e.preventDefault()
    setSearch(true)
  }

  function goBack(){ 
    setSearch(false)
  }

  return (
    <div>
      <div className="imageHeaderContainer">
        <div className="headerTextArea">
          <img src="../logo.jpg" style={{width:"300px"}} alt="" />
          <p className='headerText'>Biomarket its a supermarket that serves people by bringing the best quality foods and the best prices</p>
        </div>
        <div className="imageArea" style={{width:"30rem"}}>
        <img style={{width:"100%"}} src="../headerBackgroundImage.jpg" alt="" />
        </div>
      </div>

      {search ? <SearchListContainer goBack={goBack} productName={searchName}/> :
      <>
      {<ReviewListContainer />}
      {<CategorySearch />}
      {<FormSearch handleSubmit={handleSubmit} searchName={searchName} setSearchName={setSearchName}/>}  
      {<ProductList category={category} />} 
      
       
      </>}
    </div>
  )
}

export default ProductListContainer