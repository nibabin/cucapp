import React from "react";
import "./game-item.scss";

const GameItem = ({ competitia, etapa, autori, desprePachet, grey, first }) => (
  <div className={`${grey ? "grey" : ""} ${first ? "first" : ""} game-item`}>
    <div className="game-item-characteristic">{competitia}</div>
    <div className="game-item-characteristic">{etapa}</div>
    <div className="game-item-characteristic">{autori.join(", ")}</div>
    <div className="game-item-characteristic">{desprePachet}</div>
  </div>
);

export default GameItem;