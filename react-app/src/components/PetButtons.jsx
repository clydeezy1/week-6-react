function PetButtons({ onFeed, onPlay }) {
  return (
    <div>
      <button onClick={onFeed}>Feed</button>
      <button onClick={onPlay}>Play</button>
    </div>
  );
}

export default PetButtons;