import React, { useEffect, useState } from 'react'
import ReviewList from './ReviewList'
import { Link } from 'react-router-dom'
import axios from "axios"
import Loading from '../Loading/Loading'

const ReviewListContainer = () => {

  
  const [loading, setLoading] = useState(true)
  const [allReviews, setAllReviews] = useState(false)
  const [reviews, setReviews] = useState([])

  useEffect(()=>{ 

    if(allReviews){ 
      axios.get("https://supermarket-api-iz37.onrender.com/api/reviews")
      .then((resp) => resp.data)
      .then((resp) => setReviews(resp))
      .then((resp) => setLoading(false))
      .catch((error) => console.log(error))
    }else{ 
      axios.get("https://supermarket-api-iz37.onrender.com/api/reviews")
      .then((resp) => resp.data)
      .then((resp) => setReviews(resp.slice(0, 3)))
      .then((resp) => setLoading(false))
      .catch((error) => console.log(error))
    }

}, [allReviews])

function showLongListReview(){ 
  setAllReviews(true)
}

function showLessListReview(){ 
  setAllReviews(false)
}


  return (
    <>

    <div>
      {loading ? <Loading /> : 
      <>
        <div className="btnListReviewModalContainer">
          <b className='reviewContainerTitle'>Reviews</b>
          {allReviews ? <button onClick={showLessListReview} className='btnReviewModalList'>See less</button> :  
          <button className='btnReviewModalList' onClick={showLongListReview}>See all</button> }
        </div>
        {<ReviewList reviewList={reviews}/>}
      </>
      }
    </div>

    </>
  )
}

export default ReviewListContainer