import React from 'react';
import Navbar from '../components/Navbar'
import UserNav from '../components/UserNav'
import UserSelect from '../components/UserSelect'

class NavbarContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      currentUser: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        ...this.state,
        users: data
      })
      console.log(this.state.users)
    })
  }

  selectUser = (user) => {
    this.setState({
      ...this.state,
      currentUser: user
    })
  }

  render() {
    return (
      <div className="h-24 bg-yellow-900">
        <div className="h-full container mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-yellow-300 text-3xl font-bold mr-10">Boardgame Scheduler</p>
            <p className="text-yellow-300">Organize and schedule games for your event!</p>
          </div>
          <Navbar />
          <div className="flex">
            <UserNav currentUser={this.state.currentUser}/>
            <UserSelect users={this.state.users} handleSelectUser={this.selectUser} />
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarContainer