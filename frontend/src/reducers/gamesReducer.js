export default function gamesReducer(state = [], action) {
  switch (action.type) {
    case "GET_ALL_GAMES":
      return action.games;
    case "ADD_NEW_GAME":
      return state.concat(action.game);
    default:
      return state;
  }
}
