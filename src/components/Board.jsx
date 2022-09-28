import React from "react";

import { Card } from "./Card";

const Board = ({ data, optionOne, optionTwo, handleOption, disabled }) => {
  return (
    <div className="board">
      {data.map((card, index) => {
        // const estaSiendoComparada =
        //   props.parejaSeleccionada.indexOf(card) >= -1;
        return (
          <Card
            key={index}
            card={card}
            // estaSiendoComparada={estaSiendoComparada}
            // selecionarCarta={() => props.selecionarCarta(card)}
            // fueAdivinada={card.fueAdivinada}
            flipped={card.flipped}
            handleOption={() => handleOption(card)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export { Board };
