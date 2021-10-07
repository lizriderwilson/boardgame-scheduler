import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionsActions from "../redux/actions/sessionsActions";

import Tables from "../components/tables/Tables";

class TablesPage extends Component {
  componentDidMount() {
    this.props.actions.checkLoginStatus();
  }

  render() {
    const loggedIn = this.props.sessions.logged_in;
    let tablesOrLogin;
    if (loggedIn) {
      tablesOrLogin = <Tables />;
    } else {
      tablesOrLogin = <p>Please log in to view tables.</p>;
    }
    return (
      <div className="container mx-auto">
        <div className="mt-8">
          <h1 className="font-bold text-4xl text-darkbrown uppercase">
            Tables
          </h1>
          <p className="mt-2 w-2/3">
            Below you will find all the tables reserved for gaming. To schedule
            a play session, please click an empty timeslot to reserve a spot.
          </p>
        </div>
        {tablesOrLogin}
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

export default connect(mapStateToProps, mapDispatchToProps)(TablesPage);
