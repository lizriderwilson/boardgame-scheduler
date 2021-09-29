import React, { Component } from "react";
import { connect } from "react-redux";
import * as userActions from "./actions/userActions";
import * as sessionActions from "./actions/sessionActions";
import { bindActionCreators } from "redux";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from "./containers/NavbarContainer";
import Home from "./components/Home";
import GamesContainer from "./containers/GamesContainer";
import TablesContainer from "./containers/TablesContainer";
import UsersContainer from "./containers/UsersContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: "",
    };
  }

  componentDidMount() {
    this.props.actions.fetchUsers();
  }

  // selectUser = (user) => {
  //   this.setState({
  //     ...this.state,
  //     currentUser: user
  //   })
  // }

  handleUserChange = (e) => {
    this.setState({
      selectedUser: e.target.value,
    });
  };

  handleSubmit = (value) => {
    // const activeUser = this.props.users.find(
    //   (user) => user.username == e.target.value
    // );
    console.log(value);
    //console.log(this.props.users[0]);
    // this.props.actions.setActiveUser(activeUser);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={GamesContainer} />
          <Route exact path="/tables" component={TablesContainer} />
          <Route
            exact
            path="/users"
            render={(props) => <UsersContainer {...this.props} />}
          />
        </div>
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
