import React from "react";
import { Link } from "react-router-dom";

const UsersCard = ({ users }) => (
  <div>
    <div className="bg-yellow-100 h-24 rounded-md">
      <Link to="/users">Users</Link>
      <p>Active Users: {users.length}</p>
    </div>
  </div>
);
export default UsersCard;
