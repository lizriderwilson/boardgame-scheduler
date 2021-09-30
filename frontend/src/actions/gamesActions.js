export const fetchGames = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/games")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "GET_ALL_GAMES", games: responseJSON });
      });
  };
};
