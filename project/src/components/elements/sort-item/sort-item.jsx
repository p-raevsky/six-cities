import React from 'react';
import PropTypes from 'prop-types';

function SortItem({selectedSorting, sortItem, onChahgeSortingType}) {
  return (
    <li
      className={`places__option ${sortItem === selectedSorting ? 'places__option--active' : ''}`}
      tabIndex="0"
      data-name={sortItem}
      onClick={({target}) => {
        const value = target.dataset.name;
        onChahgeSortingType(value);
      }}
    >
      {sortItem}
    </li>
  );
}

SortItem.propTypes = {
  selectedSorting: PropTypes.string.isRequired,
  sortItem: PropTypes.string.isRequired,
  onChahgeSortingType: PropTypes.func.isRequired,
};

export default SortItem;
