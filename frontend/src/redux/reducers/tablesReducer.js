export default function tableReducer(
  state = { allTables: [], slots: [] },
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
        slots: action.slot,
      };
    default:
      return state;
  }
}
