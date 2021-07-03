import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../../const';

import FavoritesPageLoadWrapper from '../favorites-page-load-wrapper';
import LoadWrapper from '../load-wrapper';

function PrivateRoute({render, path, exact, authorizationStatus}) {
  return (
    <LoadWrapper isLoaded = {authorizationStatus !== AuthorizationStatus.UNKNOWN}>
      <FavoritesPageLoadWrapper >
        <Route
          path={path}
          exact={exact}
          render={(routeProps) => (
            authorizationStatus === AuthorizationStatus.AUTH
              ? render(routeProps)
              : <Redirect to={AppRoute.LOGIN} />
          )}
        />
      </FavoritesPageLoadWrapper>
    </LoadWrapper>
  );
}

PrivateRoute.propTypes = {
  exact: PropTypes.bool,
  path: PropTypes.string,
  render: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

export default PrivateRoute;
