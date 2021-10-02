export default function gamesReducer(
  state = { games: [], loading: false },
  action
) {
  switch (action.type) {
    case "LOADING_GAMES":
      return {
        ...state,
        games: state.games,
        loading: true,
      };
    case "GET_ALL_GAMES":
      return {
        ...state,
        games: action.games,
        loading: false,
      };
    case "ADD_NEW_GAME":
      return state.games.concat(action.game);
    default:
      return state;
  }
}
