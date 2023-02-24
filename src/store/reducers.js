import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

import Profile from "./auth/profile/reducer";

const rootReducer = combineReducers({
  // public
  Layout,
  Profile,
});

export default rootReducer;
