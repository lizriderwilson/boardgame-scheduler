import React from "react";
import ModelCard from "../components/ModelCard";
import { connect } from "react-redux";

const HomeContainer = (props) => {
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <h1 className="font-bold text-4xl text-darkbrown">
          Welcome to Boardgame Scheduler!
        </h1>
        <p className="mt-2 w-2/3">
          Boardgame Scheduler is an app to help you organize and schedule
          boardgame sessions for your event. Use it to create your library of
          available games, schedule play sessions, and let people know which
          games are open!
        </p>
      </div>
      <div className="w-3/4 mx-auto grid grid-cols-3 gap-10 mt-10">
        <ModelCard resources={props.games} slug={"games"} />
        <ModelCard resources={props.tables.allTables} slug={"tables"} />
        <ModelCard resources={props.users} slug={"users"} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    games: state.games,
    tables: state.tables,
  };
};

export default connect(mapStateToProps)(HomeContainer);
