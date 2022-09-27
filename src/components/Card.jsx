import React from "react";
import { useState } from "react";

const Card = ({ id, image }) => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card" key={id}>
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
