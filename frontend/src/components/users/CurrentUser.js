import React, { Component } from "react";

import { connect } from "react-redux";
import * as userActions from "../../redux/actions/userActions";
import * as sessionsActions from "../../redux/actions/sessionsActions";
import { bindActionCreators } from "redux";

class CurrentUser extends Component {
  handleClick = () => {
    this.props.actions.logOut();
  };

  render() {
    return (
      <div className="font-bold text-teal-400">
        Logged in as: {this.props.sessions.user.username}
        <button
          className="bg-amber-600 text-yellow-100 text-sm py-1 px-2 rounded-md ml-2 uppercase"
          onClick={this.handleClick}
        >
          Logout
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    sessions: state.sessions,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, userActions, sessionsActions),
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUser);
