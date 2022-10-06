import React from "react";

import { ProfileCharacter } from "./ProfileCharacter";

function Character({ setOpenModal, resetTurn, optionOne }) {
  return (
    <div className="character-container">
      <ProfileCharacter
        character={optionOne}
        setOpenModal={setOpenModal}
        resetTurn={resetTurn}
      />
    </div>
  );
}

export { Character };
