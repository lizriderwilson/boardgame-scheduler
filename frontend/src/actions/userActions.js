export const fetchUsers = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "GET_USERS", users: responseJSON });
      });
  };
};
