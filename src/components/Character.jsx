import React from "react";
import { ImCross } from "react-icons/im";
import { ProfileCharacter } from "./ProfileCharacter";

function Character({ setOpenModal, resetTurn, optionOne }) {
  const onCancel = () => {
    setOpenModal(false);
    resetTurn();
  };
  return (
    <div>
      <span className="todoForm-button__cancel" onClick={onCancel}>
        <ProfileCharacter character={optionOne} />
        <ImCross />{" "}
      </span>
    </div>
  );
}

export { Character };
