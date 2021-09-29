import React, { Component } from "react";
import Navbar from "../components/Navbar";

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
    //this.props.handleOnSubmit(e.target.value);
    //console.log(e.target.value);
    e.preventDefault();
    const currentSelectedUser = this.props.users.find(
      (user) => user.username === this.state.selectedUser
    );
    this.props.actions.setActiveUser(currentSelectedUser);
  };

  listUsers = () => {
    return this.props.users.map((user) => (
      <option key={user.id} value={user.username}>
        {user.username}
      </option>
    ));
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
            <p className="text-yellow-300 mr-2">Currently logged in as: </p>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.props.selectedUser}
                onChange={(event) => {
                  console.log(event.target.value);
                  this.setState({ selectedUser: event.target.value });
                }}
              />
              {/* <select
                value={this.state.seletedUser}
                onChange={this.handleChange}
              >
                <option key="0" value=""></option>
                {this.listUsers()}
              </select> */}
              <button>Login</button>
            </form>
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
