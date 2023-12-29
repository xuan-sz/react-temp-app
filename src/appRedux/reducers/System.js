import {
  APP_HEADLESS, BASE_URL, LOAD_MENU_SUCCESS, LOAD_VERSION_NO_FAIL,
  LOAD_VERSION_NO_SUCCESS, SAVE_MENU_SUCCESS
} from "../../constants/ActionTypes";

const initialConfig = {
  version: null,
  title: null,
  copyright: null,
  homePageUrl: null,
  headless: window.location.href?.indexOf("/page") !== -1,
};

const SystemReducer = (state = initialConfig, action) => {
  let newState = state;
  switch (action.type) {
    case BASE_URL:
      newState = {
        ...state,
        baseUrl: action.payload,
      };
      break;
    case APP_HEADLESS:
      newState = {
        ...state,
        headless: action.payload,
      };
      break;
    case LOAD_VERSION_NO_SUCCESS:
      newState = {
        ...state,
        ...action.payload
      };
      break;
    case LOAD_VERSION_NO_FAIL:
      newState = {
        ...state,
        version: action.payload
      };
      break;
    case SAVE_MENU_SUCCESS:
    case LOAD_MENU_SUCCESS:
      newState = {
        ...state,
        menu: action.payload
      };
      break;
    default:
      newState = state;
  }
  return newState;
};

export default SystemReducer;
