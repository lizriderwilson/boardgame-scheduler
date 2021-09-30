import React, { Component } from "react";
import { Link } from "react-router-dom";
import UsersCard from "../components/home_cards/UsersCard";
import { connect } from "react-redux";

class HomeContainer extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="font-bold text-4xl text-yellow-900">
            Welcome to Boardgame Scheduler!
          </h1>
          <p className="mt-2 w-2/3">
            Boardgame Scheduler is an app to help you organize and schedule
            boardgame sessions for your event. Use it to create your library of
            available games, schedule play sessions, and let people know which
            games are open!
          </p>
        </div>
        <div className="w-2/3 mx-auto grid grid-cols-2 gap-10 mt-10">
          <div className="bg-yellow-100 h-24 rounded-md">
            <Link to="/games">Games</Link>
          </div>
          <div className="bg-yellow-100 h-24 rounded-md">
            <Link to="/tables">Tables</Link>
          </div>
          <UsersCard users={this.props.users} />
          <div className="bg-yellow-100 h-24 rounded-md">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps)(HomeContainer);
