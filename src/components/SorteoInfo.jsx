import React from 'react';
import sorteo from '../data/Sorteo.json';
import "./SorteoInfo.css";

function SorteoInfo() {
  return (
    <div className="sorteo-info">
      <div className="sorteo-container">
        {/* Columna izquierda alineada a la izquierda */}
        <div className="sorteo-item left">
          <span className="sorteo-label">SORTEO:</span>
          <span className="sorteo-value">{sorteo.sorteo}</span>
        </div>

        {/* Columna derecha alineada a la derecha */}
        <div className="sorteo-item right">
          <span className="sorteo-label">FECHA:</span>
          <span className="sorteo-value">{sorteo.fecha}</span>
        </div>
      </div>
    </div>
  );
}

export default SorteoInfo;
