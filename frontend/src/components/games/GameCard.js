import React from "react";

const GameCard = (props) => (
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg text-darkbrown">
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
      {props.game.name}
    </h4>
    <div className="flex items-baseline">
      <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
        {props.game.number_of_players} players &bull; {props.game.time}
      </div>
    </div>
    <div className="mt-1">{props.game.description}</div>
    <div className="mt-4">
      <span className="text-sm text-gray-600">owned by</span>
      <span className="text-teal-600 text-md font-semibold">
        {" "}
        {props.game.user.username}
      </span>
    </div>
  </div>
);

export default GameCard;
