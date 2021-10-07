import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewGame } from "../../redux/actions/gamesActions";

class NewGameForm extends Component {
  state = {
    name: "",
    numberOfPlayers: "",
    time: "",
    description: "",
    user_id: this.props.user.id,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewGame(this.state);
    this.setState({
      ...this.state,
      name: "",
      numberOfPlayers: "",
      time: "",
      description: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="bg-amber-100 rounded-lg p-10 mx-auto w-1/2 text-darkbrown">
        <h2 className="mt-1 text-xl font-semibold uppercase mb-3">New Game</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="name-field"
              className="uppercase font-semibold text-sm"
            >
              Name
            </label>
            <input
              className="p-2 text-sm rounded-md bg-amber-50 border-2 border-amber-500"
              type="text"
              name="name"
              id="name-field"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="numberOfPlayers-field"
              className="uppercase font-semibold text-sm"
            >
              Number of Players
            </label>
            <input
              className="p-2 text-sm rounded-md bg-amber-50 border-2 border-amber-500"
              type="text"
              name="numberOfPlayers"
              id="numberOfPlayers-field"
              value={this.state.numberOfPlayers}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="time-field"
              className="uppercase font-semibold text-sm"
            >
              Time Required
            </label>
            <input
              className="p-2 text-sm rounded-md bg-amber-50 border-2 border-amber-500"
              type="text"
              name="time"
              id="time-field"
              value={this.state.time}
              onChange={this.handleChange}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              htmlFor="description-field"
              className="uppercase font-semibold text-sm"
            >
              Description
            </label>
            <textarea
              className="p-2 text-sm rounded-md bg-amber-50 border-2 border-amber-500"
              name="description"
              id="description-field"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <input
            className="p-2 text-sm text-darkbrown font-bold uppercase tracking-tight rounded-md bg-amber-600"
            type="submit"
            value="Add Game"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    //sessions: state.sessions,
    games: state.games,
  };
};

export default connect(mapStateToProps, { addNewGame })(NewGameForm);
