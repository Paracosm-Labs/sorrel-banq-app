import React from "react";
import { Redirect } from "react-router-dom";

//Home
import Home from "../pages/Home";
//Accounts
import Accounts from "../pages/Accounts";
//Bridge
import Bridge from "../pages/Bridge";
//Vaults
import Vaults from "../pages/Vaults";
//Addons
import Addons from "../pages/Addons";

const authProtectedRoutes = [
  { path: "/home", component: Home },
  { path: "/bridge", component: Bridge },
  { path: "/vaults", component: Vaults },
  { path: "/addons", component: Addons },
  { path: "/accounts", component: Accounts },
  { path: "/index", component: Home },
  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />,
  },
];

const publicRoutes = [];

export { authProtectedRoutes, publicRoutes };
