import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from './containers/NavbarContainer'
import Home from './components/Home'
import GamesContainer from './containers/GamesContainer'
import TablesContainer from './containers/TablesContainer'
import UsersContainer from './containers/UsersContainer'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
        <Route exact path="/" component={Home} />
        <Route exact path="/games" component={GamesContainer} />
        <Route exact path="/tables" component={TablesContainer} />
        <Route exact path="/users" component={UsersContainer} />
      </div>
    </Router>
  );
}

export default App;
