import React, {useRef}  from 'react';
import PropTypes from 'prop-types';
import {connect, useSelector, useDispatch} from 'react-redux';

import SortItem from '../../elements/sort-item/sort-item';

import {SortingType} from '../../../const';
import {setOpening, chahgeSortingType, closeSorting} from '../../../store/action';
import {useOnClickOutside} from '../../../hooks/use-on-click-outside';
import {getSelectedSorting, getIsSortingOpen} from '../../../store/process/selectors';

function SortList({chahgeSortType}) {
  const isSortingOpen = useSelector(getIsSortingOpen);
  const selectedSorting = useSelector(getSelectedSorting);

  const sortItems = Object.values(SortingType);
  const ref = useRef();
  const dispatch = useDispatch();

  useOnClickOutside(ref, () => dispatch(closeSorting()));

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      ref={ref}
      onClick={({target}) => {
        if (target.closest('.places__sorting-type') || target.closest('.places__options')) {
          dispatch(setOpening());
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
  chahgeSortType: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  chahgeSortType(value) {
    dispatch(chahgeSortingType(value));
  },
});

export default connect(null, mapDispatchToProps)(SortList);
