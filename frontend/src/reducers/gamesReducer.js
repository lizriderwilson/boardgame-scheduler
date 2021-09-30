export default function gamesReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_GAMES":
      return action.games;
    default:
      return state;
  }
}
