import React from "react";
import "./Console.css";
import game_12 from "../Assets/game_12.jpeg";
import game_2 from "../Assets/game_2.jpeg";
import game_5 from "../Assets/game_5.jpeg";
import game_4 from "../Assets/game_4.jpeg";
const Console = () => {
  return (
    <div className="consolegames">
      <div className="congame-1">
        <img src={game_12} alt="Football Strike" />
        <div className="contentcon-1">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="congame-2">
        <img src={game_2} alt="Fortnite" />
        <div className="contentcon-2">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="congame-3">
        <img src={game_5} alt="BattleField HardLine" />
        <div className="contentcon-3">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="congame-4">
        <img src={game_4} alt="Mass Effect" />
        <div className="contentcon-4">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Console;
