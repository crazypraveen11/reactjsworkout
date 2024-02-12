
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState } from 'react';

export let Car = () => {
  // Initialize the car state with default values
  const [car, setCar] = useState({
    color: 'Red',
    brand: 'Toyota',
    model: 'Camry',
  });

  // Update individual properties of the car
  const updateCarColor = (newColor) => {
    setCar((prevCar) => ({ ...prevCar, color: newColor }));
  };

  const updateCarBrand = (newBrand) => {
    setCar((prevCar) => ({ ...prevCar, brand: newBrand }));
  };

  const updateCarModel = (newModel) => {
    setCar((prevCar) => ({ ...prevCar, model: newModel }));
  };

  return (
    <div className='text-center'>
      <h2>Car Details</h2>
      <p>Color: {car.color}</p>
      <p>Brand: {car.brand}</p>
      <p>Model: {car.model}</p>

      {/* Buttons to update car properties */}
      <button onClick={() => updateCarColor('Blue')}>Change Color to Blue</button>
      <button className='ms-2' onClick={() => updateCarBrand('Honda')}>Change Brand to Honda</button>
      <button className='ms-2' onClick={() => updateCarModel('Accord')}>Change Model to Accord</button>
      
    </div>
  );
}


