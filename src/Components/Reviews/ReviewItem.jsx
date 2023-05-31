import React from 'react'

const ReviewItem = ({data}) => {

    const {author, opinion, description} = data
    
  return (
    <div className='reviewItem'>
        <span className='reviewAuthor'>{author}</span>
        <b className='reviewOpinion'>{opinion}</b>
        <p className='reviewDescription'>{description}</p>
    </div>
  )
}

export default ReviewItem