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

export const addNewTimeSlot = (time_slot) => {
  return (dispatch) => {
    fetch("http://localhost:3001/api/v1/time_slots", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        time_slot: {
          game_id: time_slot.game_id,
          table_id: time_slot.table_id,
          allDay: time_slot.allDay,
          start: time_slot.start,
          end: time_slot.end,
        },
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((slot) => {
        dispatch({ type: "ADD_NEW_TIME_SLOT", slot });
      });
  };
};
