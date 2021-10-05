import React, { Component } from "react";
import { connect } from "react-redux";
import TableCard from "./TableCard";
import { fetchTables } from "../../redux/actions/tablesActions";

class Tables extends Component {
  componentDidMount() {
    this.props.fetchTables();
  }

  render() {
    const tables = this.props.tables.map((table) => ({
      ...table,
      time_slots: table.time_slots.map((slot) => ({
        ...slot,
        start: new Date(slot.start),
        end: new Date(slot.end),
      })),
    }));
    const tableCards = tables.map((table) => (
      <TableCard key={table.id} table={table} {...this.props} />
    ));
    return <div className="grid grid-cols-3 gap-4 my-8">{tableCards}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    tables: state.tables,
  };
};

export default connect(mapStateToProps, {
  fetchTables,
})(Tables);
