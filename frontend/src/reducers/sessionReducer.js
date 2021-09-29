export default function sessionReducer(state = { activeUser: {} }, action) {
  switch (action.type) {
    case "SET_ACTIVE_USER":
      console.log(action.activeUser);
      return action.activeUser;
    default:
      return state;
  }
}
