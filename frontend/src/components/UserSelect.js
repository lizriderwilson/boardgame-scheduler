import React from 'react'

class UserSelect extends React.Component {

  render() {
    return (
      <select onChange={(event) => {this.props.handleSelectUser(event.target.value)}}>
        <option key="0" value=""></option>
        {this.props.users.map(user => (
        <option key={user.id} value={user.username}>{user.username}</option>
        ))}
      </select>
    )
  }
}

export default UserSelect