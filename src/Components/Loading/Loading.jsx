import React from 'react'

const Loading = () => {
  return (
    <>
    <div className='loadingContainer'>
        <b className='loadingTitle'>Loading data</b>
        <div className="text-center">
        <div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
    </div>
    </div>
    </>
  )
}

export default Loading