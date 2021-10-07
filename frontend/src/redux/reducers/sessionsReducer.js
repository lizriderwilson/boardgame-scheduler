export default function sessionsReducer(
  state = { user: {}, logged_in: false, loading: false },
  action
) {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(action);
      return {
        ...state,
        user: action.login_status.user,
        logged_in: true,
      };
    case "LOGOUT_USER":
      return action.logout_status;
    case "LOADING_LOGIN_STATUS":
      return {
        ...state,
        user: state.user,
        loading: true,
      };
    case "CHECK_LOGIN_STATUS":
      return {
        ...state,
        logged_in: action.login_status.logged_in,
        user: action.login_status.user,
        loading: false,
      };
    default:
      return state;
  }
}
