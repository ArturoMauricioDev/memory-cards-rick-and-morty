import React from "react";
import { ImCross } from "react-icons/im";

function ProfileCharacter({ character, setOpenModal, resetTurn }) {
  const onCancel = () => {
    setOpenModal(false);
    resetTurn();
  };
  return (
    <div className="profile-container">
      <img src={character.image} alt={`${character.name}'s image`} />
      <span>{character.name}</span>
      <span>Info</span>
      <ImCross className="close-button" onClick={onCancel} />
      <div className="character-info">
        <div>
          <span>Especie:</span>
          <span>{character.species}</span>
        </div>
        <div>
          <span>Genero:</span>
          <span>{character.gender}</span>
        </div>
        <div>
          <span>Status:</span>
          <span>{character.status}</span>
        </div>
        <div>
          <span>Tipo:</span>
          <span>{character.type}</span>
        </div>
        <div>
          <span>Location: </span>
          <span>{character.location.name}</span>
        </div>
      </div>
    </div>
  );
}

export { ProfileCharacter };
