import React, { useState } from 'react';

function StudentDropDown() {
    const [selectedValue, setSelectedValue] = useState('Option 1');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <select value={selectedValue} onChange={handleChange}>
            <option value="James Chang">James Chang</option>
            <option value="Ali Ismailov">Ali Ismailov</option>
            <option value="Nate DiCicco">Nate DiCicco</option>
        </select>
    );
}

export default StudentDropDown; 