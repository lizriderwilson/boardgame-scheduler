import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import { fetchGames } from "../../redux/actions/gamesActions";

class Games extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const gameCards = this.props.games.map((game) => (
      <GameCard key={game.id} game={game} />
    ));
    return <div className="grid grid-cols-4 gap-4 my-8">{gameCards}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

export default connect(mapStateToProps, {
  fetchGames,
})(Games);
