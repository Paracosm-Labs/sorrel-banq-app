import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";

import ProfileSaga from "./auth/profile/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(ProfileSaga),
  ]);
}
