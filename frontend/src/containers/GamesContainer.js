import React from "react";
import { connect } from "react-redux";
import * as gamesActions from "../actions/gamesActions";
import * as sessionActions from "../actions/sessionActions";
import { bindActionCreators } from "redux";

import NewGameForm from "../components/NewGameForm";

class GamesContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchGames();
  }

  render() {
    const games = this.props.games;
    const isUserLoading = this.props.sessions.loading;
    let gameForm;
    if (isUserLoading) {
      gameForm = <p>Loading</p>;
    } else {
      gameForm = <NewGameForm user={this.props.sessions.user} />;
    }
    return (
      <div className="container mx-auto">
        <h1>Games</h1>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.name} - {game.number_of_players} - {game.time} - Owned by{" "}
              {game.user.username}
            </li>
          ))}
        </ul>

        {gameForm}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    sessions: state.sessions,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, sessionActions, gamesActions),
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
