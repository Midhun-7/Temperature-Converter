// src/components/InputField.js
import React from "react";

const InputField = ({ label, value, onChange }) => {
  return (
  <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{label}</h5>
          <input type="number" value={value} onChange={onChange} />
          <a href="#" class="btn btn-primary">Convert</a>
        </div>
    </div>
  </div>
</div>
  );
};

export default InputField;
