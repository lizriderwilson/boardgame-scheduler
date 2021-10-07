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
    return (
      <div className="grid grid-cols-3 auto-rows-min gap-4">{gameCards}</div>
    );
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
