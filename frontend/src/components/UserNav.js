import React from 'react';

const UserNav = props => {
  return (
    <div className="text-white">
      {props.currentUser}
    </div>
  )
}

export default UserNav