import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from "./containers/NavbarContainer";
import HomeContainer from "./containers/HomeContainer";
import GamesContainer from "./containers/GamesContainer";
import TablesContainer from "./containers/TablesContainer";
import UsersContainer from "./containers/UsersContainer";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/games" component={GamesContainer} />
          <Route exact path="/tables" component={TablesContainer} />
          <Route exact path="/users" component={UsersContainer} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
