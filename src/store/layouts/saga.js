// @flow
import { all, call, fork, takeEvery } from "redux-saga/effects";

import {
  CHANGE_LAYOUT,
  CHANGE_SIDEBAR_THEME,
  CHANGE_SIDEBAR_SIZE_TYPE,
} from "./actionType";

/**
 * Changes the body attribute
 */
function changeHTMLAttribute(attribute, value) {
  if (document.documentElement)
    document.documentElement.setAttribute(attribute, value);
  return true;
}

/**
 * Changes the layout type
 * @param {*} param0
 */
function* changeLayoutTheme({ payload: layout }) {
  try {
    if (layout === "twocolumn") {
      document.documentElement.removeAttribute("data-layout-width");
    } else if (layout === "horizontal") {
      document.documentElement.removeAttribute("data-sidebar-size");
    }
    yield call(changeHTMLAttribute, "data-layout", layout);
  } catch (error) {
    // console.log(error);
  }
}

/**
 * Changes the left sidebar theme
 * @param {*} param0
 */
function* changeLeftSidebarTheme({ payload: theme }) {
  try {
    yield call(changeHTMLAttribute, "data-sidebar", theme);
  } catch (error) {
    // console.log(error);
  }
}
/**
 * Changes the topbar themes
 * @param {*} param0
 */
function* changeLeftsidebarSizeType({ payload: leftsidebarSizetype }) {
  try {
    switch (leftsidebarSizetype) {
      case "lg":
        yield call(changeHTMLAttribute, "data-sidebar-size", "lg");
        break;
      case "md":
        yield call(changeHTMLAttribute, "data-sidebar-size", "md");
        break;
      case "sm":
        yield call(changeHTMLAttribute, "data-sidebar-size", "sm");
        break;
      case "sm-hover":
        yield call(changeHTMLAttribute, "data-sidebar-size", "sm-hover");
        break;
      default:
        yield call(changeHTMLAttribute, "data-sidebar-size", "lg");
    }
  } catch (error) {
    // console.log(error);
  }
}

/**
 * Watchers
 */
export function* watchChangeLayoutType() {
  yield takeEvery(CHANGE_LAYOUT, changeLayoutTheme);
}

export function* watchChangeLeftSidebarTheme() {
  yield takeEvery(CHANGE_SIDEBAR_THEME, changeLeftSidebarTheme);
}
export function* watchChangeLeftsidebarSizeType() {
  yield takeEvery(CHANGE_SIDEBAR_SIZE_TYPE, changeLeftsidebarSizeType);
}

function* LayoutSaga() {
  yield all([
    fork(watchChangeLayoutType),
    fork(watchChangeLeftSidebarTheme),
    fork(watchChangeLeftsidebarSizeType),
  ]);
}

export default LayoutSaga;
