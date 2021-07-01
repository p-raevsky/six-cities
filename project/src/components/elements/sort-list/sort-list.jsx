import React, {useRef}  from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import SortItem from '../../elements/sort-item';

import {SortingType} from '../../../const';
import {
  setOpening,
  chahgeSortingType,
  closeSorting
} from '../../../store/action';
import {useOnClickOutside} from '../../../hooks/use-on-click-outside';
import {
  getSelectedSorting,
  getIsSortingOpen
} from '../../../store/process/selectors';

function SortList(props) {
  const {
    isSortingOpen,
    selectedSorting,
    setSortOpening,
    chahgeSortType,
    closeSortingMenu,
  } = props;

  const sortItems = Object.values(SortingType);
  const ref = useRef();

  useOnClickOutside(ref, () => closeSortingMenu());

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      ref={ref}
      onClick={({target}) => {
        if (target.closest('.places__sorting-type') || target.closest('.places__options')) {
          setSortOpening();
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
        {sortItems.map((sortItem) => <SortItem key = {sortItem} onChahgeSortingType = {chahgeSortType} sortItem = {sortItem} selectedSorting = {selectedSorting} />)}
      </ul>
    </form>
  );
}

SortList.propTypes = {
  selectedSorting: PropTypes.string.isRequired,
  isSortingOpen: PropTypes.bool.isRequired,
  setSortOpening: PropTypes.func.isRequired,
  chahgeSortType: PropTypes.func.isRequired,
  closeSortingMenu: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isSortingOpen: getIsSortingOpen(state),
  selectedSorting: getSelectedSorting(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSortOpening() {
    dispatch(setOpening());
  },
  chahgeSortType(value) {
    dispatch(chahgeSortingType(value));
  },
  closeSortingMenu() {
    dispatch(closeSorting());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortList);
