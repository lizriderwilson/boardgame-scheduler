import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionsActions from "../redux/actions/sessionsActions";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.actions.checkLoginStatus();
  }

  render() {
    return (
      <div className="container mx-auto">
        <h1 className="text-xl">
          Logged in as:{" "}
          {this.props.sessions.logged_in
            ? this.props.sessions.user.username
            : "no one"}
        </h1>
        <h2 className="text-lg">All Users:</h2>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
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
    actions: bindActionCreators(Object.assign({}, sessionsActions), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
