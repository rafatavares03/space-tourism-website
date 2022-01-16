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
      <div className="container home mt-3 p-0">
        <div className="text-center px-4">
          <p className="home-description text-uppercase">So, you want to travel to</p>
          <h1 className="home-title mb-3 text-uppercase text-white">Space</h1>
          <p className="mb-2 p-0 text">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and note hover kind of on the 
            edge of it. Well sit back, and relax because we'll gave you a 
            truly out of this world experience!
          </p>
        </div>
        <div className="mt-4 py-5 text-center">
          <a href="/" className="
          align-items-center
          bg-white
          d-flex
          explore
          justify-content-center
          mx-auto rounded-circle
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