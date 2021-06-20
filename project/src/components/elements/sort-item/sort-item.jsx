import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../../store/action';

function SortItem(props) {
  const {
    selectedSorting,
    sortItem,
    chahgeSortingType,
  } = props;

  return (
    <li
      className={`places__option ${sortItem === selectedSorting ? 'places__option--active' : ''}`}
      tabIndex="0"
      data-name={sortItem}
      onClick={({target}) => {
        const value = target.dataset.name;
        chahgeSortingType(value);
      }}
    >
      {sortItem}
    </li>
  );
}

SortItem.propTypes = {
  selectedSorting: PropTypes.string.isRequired,
  sortItem: PropTypes.string.isRequired,
  chahgeSortingType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  chahgeSortingType(value) {
    dispatch(ActionCreator.chahgeSortingType(value));
  },
});

export default connect(null, mapDispatchToProps)(SortItem);
