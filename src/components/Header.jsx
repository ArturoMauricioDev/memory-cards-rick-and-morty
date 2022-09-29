import React from "react";

const Header = ({ steps, reset }) => {
  return (
    <header>
      <img src="" alt="" />
      <div>
        <h1>Memory Cards</h1>
        <button onClick={reset}>Reiniciar</button>
      </div>
      <span>Intentos: {steps}</span>
    </header>
  );
};

export { Header };
