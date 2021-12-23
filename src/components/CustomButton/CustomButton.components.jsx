import React from "react";

const CustomButton = ({ children, onClick, counterButton, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      counterButton={counterButton}
      style={style}
    >
      {children}
    </button>
  );
};
export default CustomButton;
