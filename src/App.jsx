import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Header } from "./components/Header";
import { Board } from "./components/Board";
import { ButtonSection } from "./components/ButtonSection";
import { Modal } from "./components/Modal";
import { Character } from "./components/Character";

import getRandomNumbers from "./utils/getRandomNumbers";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const [optionOne, setOptionOne] = useState(null);
  const [optionTwo, setOptionTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [guessedCards, setGuessedCards] = useState(0);
  const [steps, setSteps] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const randomNumbers = getRandomNumbers();

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomNumbers}`
    );
    response
      .json()
      .then((response) => {
        setData(
          shuffle(
            []
              .concat(response)
              .concat(response)
              .map((card) => {
                return { ...card, matched: false, flipped: false };
              })
          )
        );
      })
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  //console.log(data);

  const handleOption = (card) => {
    //console.log(card);
    card.flipped = true;
    optionOne ? setOptionTwo(card) : setOptionOne(card);
  };

  useEffect(() => {
    if (optionOne && optionTwo) {
      setDisabled(true);
      setSteps(steps + 1);

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
        setOpenModal(true);
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

  useEffect(() => {
    if (guessedCards === 10) {
      alert(`Ganaste en ${steps} intentos`);
    }
  }, [guessedCards]);

  const reset = () => {
    fetchCharacter();
    setOptionOne(null);
    setOptionTwo(null);
    setDisabled(false);
    setGuessedCards(0);
    setSteps(0);
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
      <ButtonSection reset={reset} />
      {openModal && (
        <Modal>
          <Character
            setOpenModal={setOpenModal}
            resetTurn={resetTurn}
            optionOne={optionOne}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
