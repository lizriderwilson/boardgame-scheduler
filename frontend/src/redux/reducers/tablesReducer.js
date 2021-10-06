export default function tableReducer(state = [], action) {
  switch (action.type) {
    case "GET_TABLES":
      return action.tables;
    case "ADD_NEW_TIME_SLOT":
      return state.concat(action.time_slot);
    default:
      return state;
  }
}
