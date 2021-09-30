import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";

import { connect } from "react-redux";
import * as userActions from "../actions/userActions";
import * as sessionActions from "../actions/sessionActions";
import { bindActionCreators } from "redux";

class NavbarContainer extends Component {
  state = {
    selectedUser: "",
  };

  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const currentSelectedUser = this.props.users.find(
      (user) => user.username === this.state.selectedUser
    );
    this.props.actions.setActiveUser(currentSelectedUser);
  };

  render() {
    return (
      <div className="min-h-24 bg-yellow-900">
        <div className="h-full container mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-yellow-300 text-3xl font-bold mr-10">
              Boardgame Scheduler
            </p>
            <p className="text-yellow-300">
              Organize and schedule games for your event!
            </p>
          </div>
          <Navbar />
          <div className="flex">
            <Login />
            {/* <p className="text-yellow-300 mr-2">Currently logged in as: </p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.props.selectedUser}
                onChange={(event) => {
                  console.log(event.target.value);
                  this.setState({ selectedUser: event.target.value });
                }}
              />
              <button>Login</button>
            </form> */}
          </div>
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
      Object.assign({}, userActions, sessionActions),
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
