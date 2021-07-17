import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute({render, path, exact, isAuth, redirectPath}) {

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        isAuth
          ? render(routeProps)
          : <Redirect to={redirectPath} />
      )}
    />
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired,
};

export default PrivateRoute;
