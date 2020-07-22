const defaultState = {
  device: "",
  area: ""
};
function mainDataReducer (state = defaultState, action) {
  switch (action.type) {
    case "UPDATE_MAIN_DATA": 
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export default mainDataReducer;