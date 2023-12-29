import { APP_HEADLESS,LOAD_MENU, LOAD_MENU_SUCCESS,LOAD_VERSION_NO,
    LOAD_VERSION_NO_SUCCESS, SAVE_MENU, SAVE_MENU_SUCCESS } from "../../constants/ActionTypes";


export const setHeadless = (headless) => {
  return {
    type: APP_HEADLESS,
    payload: headless,
  }
};

export const loadVersion = () => {
  return {
    type: LOAD_VERSION_NO
  }
};

export const loadVersionSuccess = (version) => {
  return {
    type: LOAD_VERSION_NO_SUCCESS,
    payload: version
  }
};

export const loadMenu = () => {
  return {
    type: LOAD_MENU
  }
};

export const loadMenuSuccess = (menu) => {
  return {
    type: LOAD_MENU_SUCCESS,
    payload: menu
  }
};

export const saveMenu = (menu) => {
  return {
    type: SAVE_MENU,
    payload: menu
  }
};

export const saveMenuSuccess = (menu) => {
  return {
    type: SAVE_MENU_SUCCESS,
    payload: menu
  }
};



