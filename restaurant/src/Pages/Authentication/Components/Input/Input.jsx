import React from "react";
import "./input.css";

const Input = ({
  icon,
  placeholder,
  type,
  register,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="input">
      <div className="input_wrap">
        {icon}
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          {...register}
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
