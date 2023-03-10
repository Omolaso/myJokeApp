import React from "react";
import icon from "../images/icon.svg";

const Spinner = () => {
  return (
    <div className="wait">
      <img className="image1" src={icon} alt="Please Wait..." />
    </div>
  );
};

export default Spinner;
