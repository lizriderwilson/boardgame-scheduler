// import { combineReducers } from "redux";
// const rootReducer = combineReducers({
//   users: usersReducer,
// });
// 

// const rootReducer = (state = { users: []/*, currentUser: ''*/ }, action) => {
//   switch (action.type) {
//     case 'GET_USERS':
//       return {
//         users: action.users
//       }
//     // case "SET_USER":
//     //   return {
//     //     ...state,
//     //     currentUser: action.user
//     //   }
//     default:
//       return state;
//   }
// }

// export default rootReducer;

const rootReducer = (state = { users: [], currentUser: '' }, action) => {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.users,
      }
    case 'SET_USER':
      return {
        ...state,
        currentUser: action.user
      }
    default:
      return state;
  }
}

export default rootReducer;