import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewGame } from "../../actions/gamesActions";

class NewGameForm extends Component {
  state = {
    name: "",
    numberOfPlayers: "",
    time: "",
    description: "",
    user_id: this.props.user.id,
  };

  componentDidMount() {
    //console.log(this.props.user);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNewGame(this.state);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="bg-amber-100 rounded-md p-10">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name-field">Name</label>
            <input
              type="text"
              name="name"
              id="name-field"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="numberOfPlayers-field">Number of Players</label>
            <input
              type="text"
              name="numberOfPlayers"
              id="numberOfPlayers-field"
              value={this.state.numberOfPlayers}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="time-field">Time Required</label>
            <input
              type="text"
              name="time"
              id="time-field"
              value={this.state.time}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label htmlFor="description-field">Description</label>
            <input
              type="text"
              name="description"
              id="description-field"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Add Game" />
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
