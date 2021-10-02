import React from "react";
import { connect } from "react-redux";
import * as gamesActions from "../actions/gamesActions";
import * as sessionActions from "../actions/sessionActions";
import { bindActionCreators } from "redux";

import NewGameForm from "../components/games/NewGameForm";
import Games from "../components/games/Games";

class GamesPage extends React.Component {
  componentDidMount() {}

  render() {
    const isUserLoading = this.props.sessions.loading;
    let gameForm;
    if (isUserLoading) {
      gameForm = <p>Loading</p>;
    } else {
      gameForm = <NewGameForm user={this.props.sessions.user} />;
    }

    return (
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Games</h1>
        <Games />
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

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);
