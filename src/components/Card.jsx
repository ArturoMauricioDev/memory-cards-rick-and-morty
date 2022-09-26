import React from "react";
import { useState } from "react";

const Card = () => {
  const [flipped, setFlipped] = useState(false);
  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
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
