import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';

function App(props) {
  const {places} = props;

  return (
    <MainPage places = {places} />
  );
}

App.propTypes = {
  places: PropTypes.arrayOf(PropTypes.object),
};

export default App;
