export const toggleModal = () => {
  return { type: "TOGGLE_MODAL" };
};

export const setStartTime = (event) => {
  return { type: "SET_START_TIME", start: event.start };
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
        console.log(response);
        return response.json();
      })
      .then((time_slot) => {
        dispatch({ type: "ADD_NEW_TIME_SLOT", time_slot });
      });
  };
};
