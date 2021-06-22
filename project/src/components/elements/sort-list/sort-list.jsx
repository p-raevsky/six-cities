import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SortItem from '../../elements/sort-item/sort-item';

import {SortingType} from '../../../const';
import {ActionCreator} from '../../../store/action';

function SortList(props) {
  const {
    isSortingOpen,
    selectedSorting,
    setOpening,
    chahgeSortingType,
  } = props;

  const sortItems = Object.values(SortingType);

  return (
    <form className="places__sorting" action="#" method="get"
      onClick={({target}) => {
        if (target.closest('.places__sorting-type') || target.closest('ul')) {
          setOpening();
        }
      }}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0">
        {selectedSorting}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${isSortingOpen ? 'places__options--opened' : ''}`}>
        {sortItems.map((sortItem) => <SortItem key = {sortItem} onChahgeSortingType = {chahgeSortingType} sortItem = {sortItem} selectedSorting = {selectedSorting}/>)}
      </ul>
    </form>
  );
}

SortList.propTypes = {
  selectedSorting: PropTypes.string.isRequired,
  isSortingOpen: PropTypes.bool.isRequired,
  setOpening: PropTypes.func.isRequired,
  chahgeSortingType: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isSortingOpen: state.isSortingOpen,
  selectedSorting: state.selectedSorting,
});

const mapDispatchToProps = (dispatch) => ({
  setOpening() {
    dispatch(ActionCreator.setOpening());
  },
  chahgeSortingType(value) {
    dispatch(ActionCreator.chahgeSortingType(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
