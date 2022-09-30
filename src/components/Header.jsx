import React from "react";

const Header = ({ steps }) => {
  return (
    <header>
      <h1>Memory Cards</h1>
      <div>
        <span>Intentos: {steps}</span>
      </div>
    </header>
  );
};

export { Header };
