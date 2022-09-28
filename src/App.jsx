import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Board } from "./components/Board";

import getRandomNumbers from "./utils/getRandomNumbers";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [guessedCards, setGuessedCards] = useState(0);
  const [steps, setSteps] = useState(0);

  const randomNumbers = getRandomNumbers();

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomNumbers}`
    );
    response
      .json()
      .then((response) =>
        setData(
          shuffle(
            data
              .concat(response)
              .concat(response)
              .map((card) => {
                return { ...card, matched: false, flipped: false };
              })
          )
        )
      )
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  //console.log(data);

  const handleOption = (card) => {
    console.log(card);
    card.flipped = true;
    optionOne ? setOptionTwo(card) : setOptionOne(card);
  };

  useEffect(() => {
    if (optionOne && optionTwo) {
      setDisabled(true);
      setSteps(steps + 1);
      // if (optionOne === optionTwo) {
      //   setData((prevCards) => {
      //     return prevCards.map((card) => {
      //       if (card.id === optionOne) {
      //         return { ...card, matched: true };
      //       } else {
      //         card;
      //       }
      //     });
      //   });
      //   resetTurn();
      // } else {
      //   setTimeout(() => resetTurn(), 1000);
      // }
      if (optionOne.id === optionTwo.id) {
        setData(
          data.map((card) => {
            if (card.id !== optionOne.id) {
              return card;
            }
            setGuessedCards(guessedCards + 1);
            return { ...card, matched: true };
          })
        );
        resetTurn();
      } else {
        setTimeout(() => {
          optionOne.flipped = false;
          optionTwo.flipped = false;
          resetTurn();
        }, 1000);
      }
    }
  }, [optionOne, optionTwo]);

  const resetTurn = () => {
    setOptionOne(null);
    setOptionTwo(null);
    setDisabled(false);
  };
  return (
    <div className="App">
      <Header steps={steps} />
      <Board
        data={data}
        handleOption={handleOption}
        optionOne={optionOne}
        optionTwo={optionTwo}
        disabled={disabled}
      />
    </div>
  );
}

export default App;
