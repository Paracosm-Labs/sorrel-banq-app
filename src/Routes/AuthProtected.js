import React from "react";
import { Route } from "react-router-dom";

const AuthProtected = (props) => {
  /*
    redirect is un-auth access protected routes via url
    */

  /*if (!userProfile && loading && !token) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }*/

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>
            {" "}
            <Component {...props} />{" "}
          </>
        );
      }}
    />
  );
};

export { AuthProtected, AccessRoute };
