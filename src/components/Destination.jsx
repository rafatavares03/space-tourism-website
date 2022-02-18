import React, { useState } from 'react';
import bgDesktop from '../assets/images/destination/background-destination-desktop.jpg';
import bgMobile from '../assets/images/destination/background-destination-mobile.jpg';
import bgTablet from '../assets/images/destination/background-destination-tablet.jpg';
import { Image } from './Image';

import data from '../data.json';
const destination = data.destinations;

console.log(destination)

function Destination() {
  const [index, setDestinationIndex] = useState(0);
  const handleDestination = (value) => {
    setDestinationIndex(value);
  };

  return (
    <>
      <picture className="bottom-0 end-0 background position-absolute start-0 top-0">
        <source media="(min-width: 960px)" srcSet={bgDesktop} className="h-100 w-100" />
        <source media="(min-width: 540px)" srcSet={bgTablet} className="h-100 w-100" />
        <img src={bgMobile} alt="Background" className="h-100 w-100" />
      </picture>
      <div>
        <p className="text-white"><em>0{index + 1}</em> pick your destination</p>
        <Image data={destination} ></Image>
      </div>
    </>
  )
}

export default Destination;