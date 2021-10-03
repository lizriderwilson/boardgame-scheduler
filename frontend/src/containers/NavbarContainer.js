import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import CurrentUser from "../components/CurrentUser";

import { connect } from "react-redux";
import * as userActions from "../redux/actions/userActions";
import * as sessionsActions from "../redux/actions/sessionsActions";
import { bindActionCreators } from "redux";

class NavbarContainer extends Component {
  state = {
    selectedUser: "",
  };

  componentDidMount() {
    this.props.actions.fetchUsers();
    this.props.actions.checkLoginStatus();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const currentSelectedUser = this.props.users.find(
      (user) => user.username === this.state.selectedUser
    );
    this.props.actions.setActiveUser(currentSelectedUser);
  };

  render() {
    const loggedIn = this.props.sessions.logged_in;
    let profileOrLogin;
    if (loggedIn) {
      profileOrLogin = <CurrentUser />;
    } else {
      profileOrLogin = <Login />;
    }
    return (
      <div className="min-h-24 py-4 bg-darkbrown">
        <div className="h-full container mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-amber-600 text-3xl font-bold mr-10">
              Boardgame Scheduler
            </p>
            <p className="text-amber-200">
              Organize and schedule games for your event!
            </p>
          </div>
          <Navbar />
          <div className="flex">{profileOrLogin}</div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
