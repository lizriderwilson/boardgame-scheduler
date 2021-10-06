import React, { Component } from "react";
import { connect } from "react-redux";
import * as gamesActions from "../../redux/actions/gamesActions";
import * as tablesActions from "../../redux/actions/tablesActions";
import { bindActionCreators } from "redux";
import format from "date-fns/format";
import add from "date-fns/add";

class NewTimeSlotForm extends Component {
  state = {
    title: "",
    game_id: 0,
    table_id: this.props.tableId,
    allDay: false,
    start: this.props.start,
    end: "",
  };

  componentDidMount() {
    this.props.actions.fetchGames();
    console.log(this.props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.addNewTimeSlot(this.state);
    this.props.toggleModal();
  };

  handleGameSelect = (event) => {
    this.setState({
      ...this.state,
      title: event.target.value,
      game_id: this.props.games.find((game) => game.name === event.target.value)
        .id,
    });
  };

  handleDurationChange = (event) => {
    this.setState({
      ...this.state,
      end: String(
        add(new Date(this.state.start), {
          hours: parseInt(event.target.value),
        })
      ),
    });
    console.log(this.state);
  };

  render() {
    return (
      <form className="mt-6" onSubmit={this.handleSubmit}>
        <div className="flex flex-col mb-4">
          <div className="flex">
            <label
              htmlFor="game-field"
              className="uppercase font-semibold mr-2"
            >
              Game:
            </label>
            <select
              name="title"
              value={this.state.title}
              onChange={this.handleGameSelect}
              id="game-field"
              className="border-2 border-teal-500 rounded-md"
            >
              <option value="" disabled>
                ---
              </option>
              {this.props.games.map((game) => (
                <option key={game.id} value={game.name}>
                  {game.name}
                </option>
              ))}
            </select>
          </div>

          <p>
            <span className="uppercase font-semibold mr-2">Start Time:</span>{" "}
            {format(new Date(this.state.start), "p")}
          </p>
          <div className="flex">
            <label
              htmlFor="duration-field"
              className="uppercase font-semibold mr-2"
            >
              Duration:
            </label>
            <input
              type="number"
              step="1"
              name="end"
              onChange={this.handleDurationChange}
              id="duration-field"
              className="border-2 border-teal-500 rounded-md"
            />
          </div>
        </div>
        <input
          className="p-2 text-sm text-darkbrown font-bold uppercase tracking-tight rounded-md bg-amber-600"
          type="submit"
          value="Add Game"
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    tables: state.tables,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, gamesActions, tablesActions),
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTimeSlotForm);
