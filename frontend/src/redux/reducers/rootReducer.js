import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import usersReducer from "./userReducer";
import gamesReducer from "./gamesReducer";
import tablesReducer from "./tablesReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer,
  games: gamesReducer,
  tables: tablesReducer,
});

export default rootReducer;
