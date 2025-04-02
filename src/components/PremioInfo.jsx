import React from "react";
import "./PremioInfo.css";

const PremioInfo = () => {
  return (
    <div className="container">
      <div className="form-wrapper">
        {/* Columna izquierda */}
        <div className="left-column">
          <p className="title">NÚMERO</p>
          <div className="input-group">
            <input type="text" placeholder="01" />
            <input type="text" placeholder="02" />
            <input type="text" placeholder="03" />
            <input type="text" placeholder="04" />
          </div>
        </div>
        
        {/* Columna derecha */}
        <div className="right-column">
          <p className="title">SERIE</p>
          <div className="input-group">
            <input type="text" placeholder="05" />
            <input type="text" placeholder="06" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveForm;