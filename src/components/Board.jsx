import React, { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Card } from "./Card";

const Board = ({ data }) => {
  const [cards, setCards] = useState([]);

  return (
    <div className="board">
      {data.map((card, index) => {
        // const estaSiendoComparada =
        //   props.parejaSeleccionada.indexOf(card) >= -1;
        return (
          <Card
            key={index}
            image={card.image}
            // estaSiendoComparada={estaSiendoComparada}
            // selecionarCarta={() => props.selecionarCarta(card)}
            // fueAdivinada={card.fueAdivinada}
            flipped={card.flipped}
          />
        );
      })}
    </div>
  );
};

export { Board };
