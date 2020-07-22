import * as actions from "./actions";

function getMainData (store) {
  return new Promise((resolve, reject) => {
    const data = {
      code: 0,
      message: "success",
      result: {
        device: "ios",
        area: "sx"
      }
    };
    setTimeout(() => {
      store.dispatch(actions.mainDataAction(data.result));
      resolve(data);
    }, 1500);
  });
}

function getUserInfo (store) {
  return new Promise((resolve, reject) => {
    const data = {
      code: 0,
      message: "success",
      result: {
        name: "lipengpeng",
        age: 18
      }
    };
    setTimeout(() => {
      store.dispatch(actions.userInfoAction(data.result));
      resolve(data);
    }, 1500);
  });
}

export default { getMainData, getUserInfo }