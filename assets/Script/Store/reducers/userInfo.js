const defaultState = {
  name: "",
  age: 0
};
function userInfoReducer (state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_USER_INFO":
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default userInfoReducer;