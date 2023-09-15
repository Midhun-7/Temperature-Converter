// src/components/InputField.js
import React from "react";

const InputField = ({ label, value, onChange }) => {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
