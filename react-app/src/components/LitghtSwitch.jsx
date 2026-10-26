import { useState } from "react";

function LightSwitch() {
  const [isOn, setIsOn] = useState(false);

  function toggleLight() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <h2>{isOn ? "💡 ON" : "🌑 OFF"}</h2>

      <button onClick={toggleLight}>
        {isOn ? "Turn off" : "Turn on"}
      </button>
    </div>
  );
}

export default LightSwitch;