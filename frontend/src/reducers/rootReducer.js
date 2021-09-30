import { combineReducers } from "redux";
import sessionsReducer from "./sessionsReducer";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer,
});

export default rootReducer;
