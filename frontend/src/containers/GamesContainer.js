import React from "react";
import { connect } from "react-redux";
import * as gamesActions from "../actions/gamesActions";
import { bindActionCreators } from "redux";

class GamesContainer extends React.Component {
  componentDidMount() {
    this.props.actions.fetchGames();
  }

  render() {
    const { games } = { ...this.props };

    return (
      <div className="container mx-auto">
        <h1>Games</h1>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
              {game.name} - {game.number_of_players} - {game.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, gamesActions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesContainer);
