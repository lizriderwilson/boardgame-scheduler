import React from "react";

class UsersContainer extends React.Component {
  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-xl">
          Logged in as: {this.props.sessions.username}
        </h1>
        <h2 className="text-lg">All Users:</h2>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersContainer;
