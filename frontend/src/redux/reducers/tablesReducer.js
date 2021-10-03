export default function tableReducer(state = [], action) {
  switch (action.type) {
    case "GET_TABLES":
      return action.tables;
    default:
      return state;
  }
}
