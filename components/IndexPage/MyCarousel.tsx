import React from 'react'

function MyCarousel(props) {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide2" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide3" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/900/500/arch"
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide4" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://placeimg.com/800/200/arch"
          className="w-full rounded-lg shadow-2xl"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn-circle btn">
            ❮
          </a>
          <a href="#slide1" className="btn-circle btn">
            ❯
          </a>
        </div>
      </div>
    </div>
  )
}

export default MyCarousel
