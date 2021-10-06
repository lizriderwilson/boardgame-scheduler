export default function tableReducer(
  state = { allTables: [], timeSlots: [] },
  action
) {
  switch (action.type) {
    case "GET_TABLES":
      return {
        ...state,
        allTables: action.tables,
      };
    case "ADD_NEW_TIME_SLOT":
      return {
        ...state,
        timeSlots: state.timeSlots.push(action.timeSlot),
      };
    default:
      return state;
  }
}
