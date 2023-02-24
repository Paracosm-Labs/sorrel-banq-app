import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_SIZE_TYPE,
} from "./actionType";

//constants
import {
  layoutTypes,
  leftSidebarTypes,
  leftsidbarSizeTypes,
} from "../../Components/constants/layout";

const INIT_STATE = {
  layoutType: layoutTypes.VERTICAL,
  leftSidebarType: leftSidebarTypes.DARK,
  leftsidbarSizeType: leftsidbarSizeTypes.DEFAULT,
};

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_LAYOUT:
      return {
        ...state,
        layoutType: action.payload,
      };

    case CHANGE_SIDEBAR_THEME:
      return {
        ...state,
        leftSidebarType: action.payload,
      };
    case CHANGE_SIDEBAR_SIZE_TYPE:
      return {
        ...state,
        leftsidbarSizeType: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;
