import React from "react";
import back from "../assets/back.png";

const Card = ({ card, flipped, handleOption, disabled }) => {
  const { image } = card;

  const handleClick = () => {
    if (!disabled) {
      handleOption();
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={image} alt="card front" />
        <img
          className="back"
          src={back}
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export { Card };
