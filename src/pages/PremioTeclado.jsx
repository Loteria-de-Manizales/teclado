import { useState, useEffect, useRef } from "react";
import premios from "../data/PlanDePremios2025.json";
import SorteoInfo from "../components/SorteoInfo";
import "./PremioTeclado.css";

function PremioTeclado() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numRefs = [useRef(), useRef(), useRef(), useRef()];
  const serieRefs = [useRef(), useRef()];

  useEffect(() => {
    const resetInputs = () => {
      numRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
      serieRefs.forEach(ref => { if (ref.current) ref.current.value = ""; });
      if (numRefs[0].current) numRefs[0].current.focus();
    };

    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "s") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % premios.length);
        resetInputs();
      } else if (e.key.toLowerCase() === "w") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + premios.length) % premios.length);
        resetInputs();
      }
    };

    resetInputs();
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [currentIndex]);

  const handleInput = (e, index, refs, nextRefs, maxLen = 1) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Permite solo números

    if (e.target.value.length >= maxLen) {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (nextRefs) {
        nextRefs[0].current.focus();
      }
    }
  };

  const handleKeyDown = (e, index, refs, prevRefs) => {
    if (e.key.toLowerCase() === "a") {
      if (index > 0) {
        refs[index - 1].current.focus();
      } else if (prevRefs) {
        prevRefs[prevRefs.length - 1].current.focus();
      }
    } else if (e.key.toLowerCase() === "d") {
      if (index < refs.length - 1) {
        refs[index + 1].current.focus();
      } else if (prevRefs) {
        prevRefs[0].current.focus();
      }
    }
  };

  return (
    <div className="container">
      {/* Título del premio en una fila separada */}
      <div className="title-wrapper">
        <p className="prize-title">
          PREMIO {premios[currentIndex].titulo} POR {premios[currentIndex].valor}
        </p>
      </div>

      {/* Sección de inputs */}
      <div className="form-wrapper">
        {/* Columna izquierda */}
        <div className="left-column">
          <div className="input-group">
            {numRefs.map((ref, i) => (
              <input
                key={i}
                ref={ref}
                type="text"
                className="input-circle"
                maxLength="1"
                onInput={(e) => handleInput(e, i, numRefs, serieRefs)}
                onKeyDown={(e) => handleKeyDown(e, i, numRefs, serieRefs)}
              />
            ))}
          </div>
          <p className="title">NÚMERO</p>
        </div>

        {/* Columna derecha */}
        <div className="right-column">
          <div className="input-group">
            {serieRefs.map((ref, i) => (
              <input
                key={i}
                ref={ref}
                type="text"
                className="input-circle"
                maxLength={i === 0 ? "2" : "1"}
                onInput={(e) => handleInput(e, i, serieRefs, null, i === 0 ? 2 : 1)}
                onKeyDown={(e) => handleKeyDown(e, i, serieRefs, numRefs)}
              />
            ))}
          </div>
          <p className="title">SERIE</p>
        </div>

      </div>
      <SorteoInfo />
    </div>
  );
}

export default PremioTeclado;