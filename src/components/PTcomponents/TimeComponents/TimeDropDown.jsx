import React, { useState } from 'react'; 
 
function TimeDropDown() { 
  const [selectedValue, setSelectedValue] = useState('Option 1'); 
 
  const handleChange = (event) => { 
    setSelectedValue(event.target.value); 
  }; 
 
  return ( 
    <select value={selectedValue} onChange={handleChange}> 
      <option value="James Chang">James Chang</option> 
      <option value="Ali Ismailov">Option 2</option> 
      <option value="Nate DiCicco">Option 3</option> 
    </select> 
  ); 
} 
 
export default TimeDropDown; 