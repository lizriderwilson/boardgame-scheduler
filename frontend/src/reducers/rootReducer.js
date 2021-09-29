import { combineReducers } from "redux";
import sessionsReducer from "./sessionReducer";
import usersReducer from "./userReducer";

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  users: usersReducer,
});

export default rootReducer;
