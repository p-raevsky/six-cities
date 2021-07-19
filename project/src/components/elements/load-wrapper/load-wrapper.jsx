import React from 'react';
import LoadingScreen from '../loading-screen/loading-screen';
import PropTypes from 'prop-types';

function LoadWrapper({isLoaded, children}) {
  return (isLoaded && children) || <LoadingScreen />;
}

LoadWrapper.propTypes = {
  isLoaded: PropTypes.bool,
  children: PropTypes.element,
};

export default LoadWrapper;
