import React, { Component } from "react";
import { connect } from "react-redux";
import { checkLoginStatus, loginUser } from "../redux/actions/sessionsActions";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleOnChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const user = { ...this.state };
    this.props.loginUser(user);
    this.setState({
      username: "",
      password: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit} className="flex">
          <div className="flex flex-col">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.state.username}
              onChange={this.handleOnChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              required
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default connect(null, { loginUser, checkLoginStatus })(Login);
