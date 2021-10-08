import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionsActions from "../redux/actions/sessionsActions";

import Users from "../components/users/Users";

class UsersContainer extends Component {
  componentDidMount() {
    this.props.actions.checkLoginStatus();
  }

  render() {
    const loggedIn = this.props.sessions.logged_in;
    let usersOrLogin;
    if (loggedIn) {
      usersOrLogin = <Users />;
    } else {
      usersOrLogin = <p>Please log in to view users.</p>;
    }
    return (
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="font-bold text-4xl text-darkbrown uppercase">Users</h1>
        </div>
        {usersOrLogin}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sessions: state.sessions,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, sessionsActions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
