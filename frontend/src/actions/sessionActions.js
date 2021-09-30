export const setActiveUser = (activeUser) => {
  return { type: "SET_ACTIVE_USER", activeUser: activeUser };
};

export const loginUser = (user) => {
  return (dispatch) => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: user.username,
          password: user.password,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((login_status) => {
        dispatch({ type: "LOGIN_USER", login_status });
      });
  };
};

export const checkLoginStatus = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/logged_in", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((login_status) => {
        //console.log(login_status);
        dispatch({ type: "CHECK_LOGIN_STATUS", login_status });
      });
  };
};
