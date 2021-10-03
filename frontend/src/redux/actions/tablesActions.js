export const fetchTables = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/tables")
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        dispatch({ type: "GET_TABLES", tables: responseJSON });
      });
  };
};
