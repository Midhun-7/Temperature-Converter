// src/components/TemperatureConverter.js
import React, { useState } from "react";
import InputField from "./InputField";

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celsius, setCelsius] = useState(0);

  const handleFahrenheitChange = (e) => {
    const fahrenheitValue = parseFloat(e.target.value);
    const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
    setCelsius(celsiusValue);
    setFahrenheit(fahrenheitValue);
  };

  const handleCelsiusChange = (e) => {
    const celsiusValue = parseFloat(e.target.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    setFahrenheit(fahrenheitValue);
    setCelsius(celsiusValue);
  };

  return (
    <div className="temperature-converter">
      <InputField label="Fahrenheit" value={fahrenheit} onChange={handleFahrenheitChange} />
      <InputField label="Celsius" value={celsius} onChange={handleCelsiusChange} />
    </div>
  );
};

export default TemperatureConverter;
