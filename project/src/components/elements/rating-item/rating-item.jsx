import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {setNewRating} from '../../../store/action';
import {getNewRating} from '../../../store//process/selectors';

function RatingItem({isDisabled, index}) {
  const dispatch = useDispatch();

  const newRating = useSelector(getNewRating);

  const isChecked = newRating === String(index);

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={index}
        id={`${index}-stars`}
        type="radio"
        checked={isChecked}
        disabled={isDisabled}
        onChange={({target}) => {
          dispatch(setNewRating(target.value));
        }}
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

RatingItem.propTypes = {
  index: PropTypes.number.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default RatingItem;
