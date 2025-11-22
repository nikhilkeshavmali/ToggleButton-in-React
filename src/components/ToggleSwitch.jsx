import { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const checkIsOn = isOn ? "ON" : "OFF";
  
  const toggleBGColor ={ backgroundColor: isOn ? "#4caf50" : "#f44336" }
  return (
    <>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>
    </>
  );
};
export default ToggleSwitch;
