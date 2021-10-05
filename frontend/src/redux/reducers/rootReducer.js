import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import usersReducer from "./userReducer";
import gamesReducer from "./gamesReducer";
import tablesReducer from "./tablesReducer";
import timeSlotsReducer from "./timeSlotsReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer,
  games: gamesReducer,
  tables: tablesReducer,
  timeSlots: timeSlotsReducer,
});

export default rootReducer;
