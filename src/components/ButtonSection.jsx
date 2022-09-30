import React from "react";

function ButtonSection({ reset }) {
  return (
    <div className="button-section">
      <button className="primary-button" onClick={reset}>
        Reiniciar
      </button>
    </div>
  );
}

export { ButtonSection };
