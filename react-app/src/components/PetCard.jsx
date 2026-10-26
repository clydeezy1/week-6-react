function PetCard({ pet }) {
  return (
    <div>
      <h2>{pet.name}</h2>
      <p>Hunger: {pet.hunger}</p>
      <p>Happiness: {pet.happiness}</p>
    </div>
  );
}

export default PetCard;