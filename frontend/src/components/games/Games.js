import React, { Component } from "react";
import { connect } from "react-redux";
import GameCard from "./GameCard";
import NewGameForm from "./NewGameForm";
import { fetchGames } from "../../redux/actions/gamesActions";

class Games extends Component {
  componentDidMount() {
    this.props.fetchGames();
  }

  render() {
    const isUserLoading = this.props.sessions.loading;
    let gameForm;
    if (isUserLoading) {
      gameForm = <p>Loading</p>;
    } else {
      gameForm = <NewGameForm user={this.props.sessions.user} />;
    }

    const gameCards = this.props.games.map((game) => (
      <GameCard key={game.id} game={game} />
    ));
    return (
      <div className="flex gap-4 mt-8">
        <div className="grid grid-cols-3 auto-rows-min gap-4">{gameCards}</div>
        {gameForm}
      </div>
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
