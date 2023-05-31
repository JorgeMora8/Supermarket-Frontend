import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from "../Loading/Loading"
import ReviewItem from './ReviewItem'

const ReviewList = ({reviewList}) => {

  return (
    <div className='reviewListContainer'>
        {reviewList.map((review) => <ReviewItem key={review.id} data={review}/>) }
    </div>
  )
}

export default ReviewList