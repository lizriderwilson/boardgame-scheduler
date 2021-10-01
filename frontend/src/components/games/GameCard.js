import React from "react";
import { NavLink } from "react-router-dom";

const GameCard = (props) => (
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg">
    <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
      {props.game.name}
    </h4>
    <div className="flex items-baseline">
      {/* <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span> */}
      <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
        {props.game.number_of_players} players &bull; {props.game.time}
      </div>
    </div>
    <div class="mt-1">{props.game.description}</div>
    <div class="mt-4">
      <span class="text-sm text-gray-600">owned by</span>
      <span class="text-teal-600 text-md font-semibold">
        {" "}
        {props.game.user.username}
      </span>
    </div>
  </div>
);

export default GameCard;
