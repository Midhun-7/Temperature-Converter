import React from "react";
import "./App.css";
import TemperatureConverter from "./components/TemperatureConverter";
import InputField from "./components/InputField.jsx";

function App() {
  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <TemperatureConverter />
    </div>
  );
}

export default App;
