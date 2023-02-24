import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_SIZE_TYPE,
} from "./actionType";

export const changeLayout = (layout) => ({
  type: CHANGE_LAYOUT,
  payload: layout,
});

export const changeSidebarTheme = (theme) => ({
  type: CHANGE_SIDEBAR_THEME,
  payload: theme,
});
export const changeLeftsidebarSizeType = (leftsidebarSizetype) => ({
  type: CHANGE_SIDEBAR_SIZE_TYPE,
  payload: leftsidebarSizetype,
});
