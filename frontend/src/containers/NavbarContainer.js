import React from 'react';
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo'

class NavbarContainer extends React.Component {
  render() {
    return (
      <div className="h-24 bg-yellow-900">
        <div className="h-full container mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-yellow-300 text-3xl font-bold mr-10">Boardgame Scheduler</p>
            <p className="text-yellow-300">Organize and schedule games for your event!</p>
          </div>
          <Navbar />
          <UserInfo username={"testuser"}/>
        </div>
      </div>
    )
  }
}

export default NavbarContainer