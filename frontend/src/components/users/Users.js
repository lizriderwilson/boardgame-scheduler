import React, { Component } from "react";
import { connect } from "react-redux";
import UserCard from "./UserCard";
import { fetchUsers } from "../../redux/actions/userActions";

class Users extends Component {
  render() {
    const userCards = this.props.users.map((user) => (
      <UserCard key={user.id} user={user} />
    ));
    return (
      <div className="grid grid-cols-4 auto-rows-min gap-4 mt-8">
        {userCards}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  fetchUsers,
})(Users);
