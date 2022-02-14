import React from 'react';
import bgDesktop from '../assets/images/crew/background-crew-desktop.jpg';
import bgMobile from '../assets/images/crew/background-crew-mobile.jpg';
import bgTablet from '../assets/images/crew/background-crew-tablet.jpg';

function Crew() {
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

export default Crew;