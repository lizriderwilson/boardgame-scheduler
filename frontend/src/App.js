import React, { Component } from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from "./containers/NavbarContainer";
import HomeContainer from "./containers/HomeContainer";
import GamesPage from "./containers/GamesPage";
import TablesPage from "./containers/TablesPage";
import UsersContainer from "./containers/UsersContainer";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavbarContainer />
          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/games" component={GamesPage} />
          <Route exact path="/tables" component={TablesPage} />
          <Route exact path="/users" component={UsersContainer} />
          <Route exact path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
