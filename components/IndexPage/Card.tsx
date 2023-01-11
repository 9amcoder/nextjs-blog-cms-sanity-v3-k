import React from 'react'

function Card(props) {
  return (
    <div className="card glass w-96">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Life hack</h2>
        <p>How to park your car at your garage?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Learn now!</button>
        </div>
      </div>
    </div>
  )
}

export default Card
