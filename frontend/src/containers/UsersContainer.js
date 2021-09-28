import React from 'react'

class UsersContainer extends React.Component {
  render() {
    return (
      <div className="container mx-auto">{this.props.currentUser}</div>
    )
  }
}

export default UsersContainer