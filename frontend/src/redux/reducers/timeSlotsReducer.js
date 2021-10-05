export default function timeSlotsReducer(
  state = { allTimeSlots: [], start: "", modalOpen: false },
  action
) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    case "SET_START_TIME":
      return {
        ...state,
        start: action.start,
      };
    case "ADD_NEW_TIME_SLOT":
      return {
        ...state,
        allTimeSlots: state.allTimeSlots.append(action.time_slot),
      };
    default:
      return state;
  }
}
