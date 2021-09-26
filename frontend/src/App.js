import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from './containers/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route />
      </div>
    </Router>
  );
}

export default App;
