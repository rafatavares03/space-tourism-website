import React from 'react';
import bgDesktop from '../assets/images/technology/background-technology-desktop.jpg';
import bgMobile from '../assets/images/technology/background-technology-mobile.jpg';
import bgTablet from '../assets/images/technology/background-technology-tablet.jpg';

function Technology() {
  return (
    <>
      <picture className="bottom-0 end-0 background position-absolute start-0 top-0">
        <source media="(min-width: 960px)" srcSet={bgDesktop} className="h-100 w-100" />
        <source media="(min-width: 540px)" srcSet={bgTablet} className="h-100 w-100" />
        <img src={bgMobile} alt="Background" className="h-100 w-100" />
      </picture>
    </>
  )
}

export default Technology;