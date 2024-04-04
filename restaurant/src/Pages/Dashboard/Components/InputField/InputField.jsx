import React from "react";
import "./input-field.css";

const InputField = ({ type, value, placeholder, name, onChange, register, icon, label }) => {
  return (
    <div className="input_field">
      <label htmlFor="">{label}</label>
      <div className="if_input">
        {icon}
        <input
          autoComplete="off"
          type={type}
          value={value}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          {...register}
        />
      </div>
    </div>
  );
};

export default InputField;
