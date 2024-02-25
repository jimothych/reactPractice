import React from 'react';
import badge2 from './badge2.png'; // Tell webpack this JS file uses this image

console.log(badge2); // /logo.84287d09.png

function Badge2() {
  // Import result is the URL of your image
  return <img src={badge2} alt="Badge2" />;
}s

export default Badge2;