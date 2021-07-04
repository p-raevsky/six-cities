import React, {useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import {setNewRating} from '../../../store/action';
import {
  getNewRating,
  getIsNewCommentDisabled
} from '../../../store//process/selectors';

function RatingItem({index}) {
  const ratingRef = useRef();
  const dispatch = useDispatch();

  const newRating = useSelector(getNewRating);
  const isNewCommentDisabled= useSelector(getIsNewCommentDisabled);

  const isChecked = newRating === index;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        ref={ratingRef}
        value={index}
        id={`${index}-stars`}
        type="radio"
        checked={isChecked}
        disabled={isNewCommentDisabled}
        onChange={() => {
          dispatch(setNewRating(ratingRef.current.value));
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
};

export default RatingItem;
