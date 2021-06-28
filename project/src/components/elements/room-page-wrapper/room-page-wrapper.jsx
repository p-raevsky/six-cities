import React from 'react';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen';

function RoomPageWrapper({isDataLoaded, children}) {
  return (isDataLoaded && children) || <LoadingScreen />;
}

RoomPageWrapper.propTypes = {
  isDataLoaded: PropTypes.bool,
  children: PropTypes.element,
};

export default RoomPageWrapper;
