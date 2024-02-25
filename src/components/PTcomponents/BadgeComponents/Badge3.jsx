import React from 'react';
import badge3 from './badge3.png'; // Tell webpack this JS file uses this image

console.log(badge3); // /logo.84287d09.png

function Badge3() {
  // Import result is the URL of your image
  return <img src={badge3} alt="Badge3" />;
}s

export default Badge3;