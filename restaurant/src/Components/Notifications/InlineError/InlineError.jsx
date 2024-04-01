import React from "react";
import "./inline-error.css";

const InlineError = ({ text }) => {
  return (
    <div className="inline_error">
      <p>{text}</p>
    </div>
  );
};

export default InlineError;
