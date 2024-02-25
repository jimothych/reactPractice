import React from 'react';
import badge1 from './src/badge1.png'; // Tell webpack this JS file uses this image

console.log(badge1); // /logo.84287d09.png

function Badge1() {
  // Import result is the URL of your image
  return <img src={badge1} alt="Badge1" />;
}s

export default Badge1;