import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarContainer from "./containers/NavbarContainer";
import HomeContainer from "./containers/HomeContainer";
import GamesContainer from "./containers/GamesContainer";
import TablesPage from "./containers/TablesContainer";
import UsersContainer from "./containers/UsersContainer";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavbarContainer />
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/games" component={GamesContainer} />
        <Route exact path="/tables" component={TablesPage} />
        <Route exact path="/users" component={UsersContainer} />
      </div>
    </Router>
  );
};

export default App;
