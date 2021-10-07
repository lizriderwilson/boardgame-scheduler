import React from "react";

const UserCard = (props) => (
  <div className="bg-amber-100 p-6 rounded-lg shadow-lg text-darkbrown">
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">
      {props.user.username}
    </h4>
    <div className="flex items-baseline">
      <div className="text-gray-600 uppercase text-xs font-semibold tracking-wider">
        {props.user.games.length} games
      </div>
    </div>
  </div>
);

export default UserCard;
