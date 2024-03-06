import React from "react";
import "./PcMac.css";
import game_8 from "../Assets/game_8.jpeg";
import game_6 from "../Assets/game_6.jpeg";
import game_7 from "../Assets/game_7.jpeg";
import game_9 from "../Assets/game_9.jpeg";
const PcMac = () => {
  return (
    <div className="pcmacgames">
      <div className="pcgame1">
        <img src={game_8} alt="Tekken 5" />
        <div className="contentpc-1">
          <p>Click Here To Play</p>
          <button type="button">Play</button>
        </div>
      </div>
      <div className="pcgame2">
        <img src={game_6} alt="GTA 5" />
        <div className="contentpc-2">
          <p>Click Here To Play</p>
          <button type="button">Play</button>
        </div>
      </div>
      <div className="pcgame3">
        <img src={game_7} alt="Call Of Duty" />
        <div className="contentpc-3">
          <p>Click Here To Play</p>
          <button type="button">Play</button>
        </div>
      </div>
      <div className="pcgame4">
        <img src={game_9} alt="AngryBirds" />
        <div className="contentpc-4">
          <p>Click Here To Play</p>
          <button type="button">Play</button>
        </div>
      </div>
    </div>
  );
};

export default PcMac;
