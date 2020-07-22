function mainDataAction (payload) {
  return {
    type: "UPDATE_MAIN_DATA",
    payload
  }
}

function userInfoAction (payload) {
  return {
    type: "UPDATE_USER_INFO",
    payload
  }
}

export default {
  mainDataAction,
  userInfoAction
}