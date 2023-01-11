import React from 'react'
import MyCarousel from './MyCarousel'
import './Alert.css'

function HeroSmall(props) {
  return (
    <div className="color-drops hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <MyCarousel />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn-primary btn">Contact Now</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSmall
