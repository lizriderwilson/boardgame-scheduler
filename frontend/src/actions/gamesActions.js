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

export const addNewGame = (game) => {
  console.log(game);
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/games", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        game: {
          name: game.name,
          number_of_players: game.numberOfPlayers,
          time: game.time,
          description: game.description,
          user_id: game.user_id,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        dispatch({ type: "ADD_NEW_GAME", game });
      });
  };
};
