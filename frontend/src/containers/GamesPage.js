import React, { Component } from "react";
import { connect } from "react-redux";
import * as gamesActions from "../redux/actions/gamesActions";
import * as sessionActions from "../redux/actions/sessionsActions";
import { bindActionCreators } from "redux";

import Games from "../components/games/Games";

class GamesPage extends Component {
  componentDidMount() {
    this.props.actions.checkLoginStatus();
  }
  render() {
    const loggedIn = this.props.sessions.logged_in;
    let gamesOrLogin;
    if (loggedIn) {
      gamesOrLogin = <Games sessions={this.props.sessions} />;
    } else {
      gamesOrLogin = <p>Please log in to view tables.</p>;
    }

    return (
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="font-bold text-4xl text-darkbrown uppercase">Games</h1>
          <p className="mt-2 w-2/3">
            Check out the list of games here. To add a game to the collection,
            use the form below.
          </p>
        </div>
        {gamesOrLogin}
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
