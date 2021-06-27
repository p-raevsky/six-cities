import React from 'react';
import LoadingScreen from '../loading-screen';
import PropTypes from 'prop-types';

function LoadWrapper(props) {
  const {
    isDataLoaded,
    children,
  } = props;

  return (isDataLoaded && children) || <LoadingScreen />;
}

LoadWrapper.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  children: PropTypes.element,
};

export default LoadWrapper;
