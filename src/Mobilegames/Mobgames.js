import React from "react";
import "./Mobgames.css";
import game_1 from "../Assets/game_1.jpeg";
import game_3 from "../Assets/game_3.jpeg";
import game_11 from "../Assets/game_11.jpeg";
import game_10 from "../Assets/game_10.jpeg";

const Mobgames = () => {
  return (
    <div className="mobgames">
      <div className="mobgames-1">
        <img src={game_1} alt="Crystal Explores" />
        <div className="contentmob-1">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="mobgames-2">
        <img src={game_3} alt="Card Puzzle" />
        <div className="contentmob-2">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="mobgames-3">
        <img src={game_11} alt="Carrom" />
        <div className="contentmob-3">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
      <div className="mobgames-4">
        <img src={game_10} alt="Chess" />
        <div className="contentmob-4">
          <p>Click Here To Play</p>
          <button>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Mobgames;
