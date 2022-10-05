import React from "react";

function ProfileCharacter({ character }) {
  return (
    <div>
      <span>Nombre:</span>
      <span>{character.name}</span>
      <span>Especie:</span>
      <span>{character.species}</span>
      <img src={character.image} alt={`${character.name}'s image`} />
    </div>
  );
}

export { ProfileCharacter };
