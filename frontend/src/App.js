import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, setUser } from "./actions/userActions";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from './containers/NavbarContainer'
import Home from './components/Home'
import GamesContainer from './containers/GamesContainer'
import TablesContainer from './containers/TablesContainer'
import UsersContainer from './containers/UsersContainer'

class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     users: [],
  //     currentUser: ''
  //   }
  // }

  componentDidMount() {
    this.props.fetchUsers();
  }

  // selectUser = (user) => {
  //   this.setState({
  //     ...this.state,
  //     currentUser: user
  //   })
  // }

    handleOnChange = (event) => {
    this.setState({
      ...this.state,
      currentUser: event.target.value
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavbarContainer {...this.props} onChange={this.handleOnChange} />
          <Route exact path="/" component={Home} />
          <Route exact path="/games" component={GamesContainer} />
          <Route exact path="/tables" component={TablesContainer} />
          <Route exact path="/users" render={(props) => <UsersContainer {...this.props} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    currentUser: state.currentUser
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchUsers: () => dispatch(fetchUsers()),
//     setUser: () => dispatch(setUser())
//   }
// }

export default connect(mapStateToProps, {fetchUsers, setUser})(App);
