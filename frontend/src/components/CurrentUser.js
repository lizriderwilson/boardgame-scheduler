import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import * as sessionsActions from "../redux/actions/sessionsActions";
import { bindActionCreators } from "redux";

class CurrentUser extends Component {
  handleClick = () => {
    this.props.actions.logOut();
  };

  render() {
    return (
      <div className="font-bold text-teal-400">
        Logged in as:{" "}
        <NavLink to="/profile" exact className="mx-4">
          {this.props.sessions.user.username}
        </NavLink>
        <button onClick={this.handleClick}>Logout!</button>
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
