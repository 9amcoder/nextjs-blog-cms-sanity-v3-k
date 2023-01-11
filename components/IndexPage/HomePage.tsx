import React from 'react'
import Alert from './Alert'
import Card from './Card'

import Footer from './Footer'
import Hero from './Hero'
import HeroSmall from './HeroSmall'
import MyCarousel from './MyCarousel'
import Navbar from './Navbar'

function HomePage(props) {
  return (
    <div>
      <Alert
        message1="Call us today for a free estimate. "
        message2="888-888-8888"
        message3="xxx@gmail.com"
      />
      <Navbar
        navButton1="Home"
        navButton2="Sevices"
        navButton3="Blog"
        navButton4="Gallery"
        navButton5="Contact"
        navButton6="About us"
        logo="Kalpin-logo"
      />
      {/* <Hero
        title="Transform Your Space with Our Professional Painting Services"
        subtitle="Welcome to our website for professional house painting services. Our team provides high-quality painting for the inside and outside of homes. We use top-quality paints and materials to ensure beautiful, long-lasting results. Contact us today to schedule a consultation and get a quote. Let us help you transform your space with our professional painting services."
        actionButtonTitle="Call us now!"
      /> */}
      {/* <MyCarousel /> */}
      <div className="divider"></div>
      <HeroSmall />
      <div className="divider"></div>
      <div className="mb-4 ">
        <p className="card-title underline decoration-solid">Our service</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 flex-1 md:mb-0">
          <Card />
        </div>
        <div className="mb-4 flex-1 md:mb-0">
          <Card />
        </div>
        <div className="mb-4 flex-1 md:mb-0">
          <Card />
        </div>
      </div>

      <div className="divider"></div>
      <div className="flex w-full flex-col">
        <div className="card rounded-box grid h-20 place-items-center bg-base-300"></div>
        <div className="divider"></div>
        <div className="card rounded-box grid h-20 place-items-center bg-base-300">
          More content coming...
        </div>
      </div>
      <Footer
        title="Kalpin Paiting Contracting Ltd."
        subtitle="Providing quality painting services since 2005."
      />
    </div>
  )
}

export default HomePage
