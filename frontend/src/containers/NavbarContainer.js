import React from 'react';
import Navbar from '../components/Navbar'

class NavbarContainer extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     users: [],
  //     currentUser: ''
  //   }
  // }

  // componentDidMount() {
  //   fetch('http://localhost:3001/api/v1/users', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Accept: 'application/json'
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({
  //       ...this.state,
  //       users: data
  //     })
  //     console.log(this.state.users)
  //   })
  // }

  // selectUser = (user) => {
  //   this.setState({
  //     ...this.state,
  //     currentUser: user
  //   })
  // }

  handleChange = (event) => {
    console.log(event.target)
    //this.props.onChange(event.target.value)
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
            <p className="text-yellow-300 mr-2">Currently logged in as: </p>
              <select onChange={this.handleChange}>
                <option key="0" value=""></option>
                {this.props.users.map(user => (
                <option key={user.id} value={user.username}>{user.username}</option>
                ))}
              </select>
          </div>
        </div>
      </div>
    )
  }
}

export default NavbarContainer