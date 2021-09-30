export default function sessionsReducer(
  state = { user: {}, logged_in: false },
  action
) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.login_status;
    case "LOGOUT_USER":
      console.log(action.logout_status);
      return action.logout_status;
    case "CHECK_LOGIN_STATUS":
      return action.login_status;
    default:
      return state;
  }
}
