import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../../const';

import {getAuthorizationStatus} from '../../../store/user/selectors';

function RedirectSingInRoute({render, path, exact}) {
  const authorizationStatus = useSelector(getAuthorizationStatus);

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => (
        authorizationStatus === AuthorizationStatus.AUTH
          ? <Redirect to={AppRoute.ROOT} />
          : render(routeProps)
      )}
    />
  );
}

RedirectSingInRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func.isRequired,
};

export default RedirectSingInRoute;

