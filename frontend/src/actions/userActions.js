// export const fetchUsers = () => {
//   return (dispatch) => {
//     //dispatch({ type: 'GET_USERS' });
//     fetch('http://localhost:3001/api/v1/users')
//     .then(response => {return response.json()})
//     .then(users => {
//       console.log(users);
//       dispatch({ type: 'GET_USERS', users: users})
//       // this.setState({
//       //   ...this.state,
//       //   users: data
//       // })
//       // console.log(this.state.users)
//     })
//   }
// }

export const fetchUsers = () => {
  return (dispatch) => {
    fetch('http://localhost:3001/api/v1/users').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'GET_USERS', users: responseJSON })
    })
  }
}

export const setUser = user => {
  return {
    type: 'SET_USER',
    user
  }
}