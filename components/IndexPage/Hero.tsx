import React from 'react'

function Hero(props: {
  title: string
  subtitle: string
  actionButtonTitle: string
}) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.postimg.cc/kgLkFdjx/pexels-vecislavas-popa-1571458.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-6 text-5xl font-bold text-white">{props.title}</h1>
          <p className="mb-6 text-white">{props.subtitle}</p>
          <button className="btn-primary btn">{props.actionButtonTitle}</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
