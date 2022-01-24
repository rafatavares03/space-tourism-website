import React from 'react';
import bgDesktop from '../assets/images/home/background-home-desktop.jpg';
import bgTablet from '../assets/images/home/background-home-tablet.jpg';
import bgMobile from '../assets/images/home/background-home-mobile.jpg';

export default function Home() {
  return (
    <>
      <picture className="bottom-0 end-0 background position-absolute start-0 top-0">
        <source media="(min-width: 960px)" srcSet={bgDesktop} className="h-100 w-100"/>
        <source media="(min-width: 540px)" srcSet={bgTablet} className="h-100 w-100"/>
        <img src={bgMobile} alt="Background" className="h-100 w-100"/>
      </picture>
      <div className="container d-lg-flex home justify-content-between mt-3 mt-md-5 mt-lg-0 p-0 pb-lg-5 px-lg-5">
        <div className="home-texts mb-lg-5 mx-md-auto mx-lg-0 pb-lg-5 ps-xxl-5 pt-md-5 pt-lg-0 px-4 px-md-0 text-center text-lg-start">
          <p className="home-description mb-md-2 mt-md-2 text-uppercase">So, you want to travel to</p>
          <h1 className="home-title mb-3 mb-md-2 text-uppercase text-white">Space</h1>
          <p className="mb-2 p-0 text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and note hover kind of on the 
            edge of it. Well sit back, and relax because we'll gave you a 
            truly out of this world experience!
          </p>
        </div>
        <div className="mb-lg-5 mt-4 mt-md-5 pe-xxl-5 py-5 text-center">
          <a href="/" className="
          align-items-center
          bg-white
          d-flex
          explore
          justify-content-center
          my-md-5
          my-lg-0
          mx-auto
          rounded-circle
          text-black
          text-decoration-none
          text-uppercase
          ">
            Explore
          </a>
        </div>
      </div>
    </>
  )
}