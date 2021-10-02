import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import usersReducer from "./userReducer";
import gamesReducer from "./gamesReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer,
  games: gamesReducer,
});

export default rootReducer;
