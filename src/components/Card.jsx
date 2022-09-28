import React from "react";
import { useState, useEffect } from "react";

const Card = ({ card, flipped, handleOption, disabled }) => {
  const { image } = card;
  // const [flippedState, setFlippedState] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      handleOption();
      // setFlippedState(!flippedState);
    }
  };

  // useEffect(() => {
  //   setFlippedState(flipped);
  // }, [flipped]);

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={image}
          alt="card front"
          onClick={handleClick}
        />
        <img
          className="back"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ66zdU1Htrdf-XkXJLGsXC-WLr3dDko2m1YHjTZyEFVDUxpEbXhslRK7FFQDARVA8-fjs&usqp=CAU"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export { Card };
