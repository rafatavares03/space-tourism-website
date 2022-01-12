import React from 'react';
import bgDesktop from '../assets/images/home/background-home-desktop.jpg';
import bgTablet from '../assets/images/home/background-home-tablet.jpg';
import bgMobile from '../assets/images/home/background-home-mobile.jpg';

function Home() {
  return (
    <>
      <picture className="bottom-0 end-0 background position-absolute start-0 top-0">
        <source media="(min-width: 960px)" srcSet={bgDesktop} className="h-100 w-100"/>
        <source media="(min-width: 540px)" srcSet={bgTablet} className="h-100 w-100"/>
        <img src={bgMobile} alt="Background" className="h-100 w-100"/>
      </picture>
      <div className="container">
        <div>
          <p className="">So you want to travel to</p>
          <h1 className="text-white">Space</h1>
          <p className="">
            Let's face it; if you want to go to space, you might as well
            genuinely go to outer space and note hover kind of on the 
            edge of it. Well sit back, and relax because we'll gave you a 
            truly out of this world experience!
          </p>
        </div>
      </div>
    </>
  )
}

export default Home;