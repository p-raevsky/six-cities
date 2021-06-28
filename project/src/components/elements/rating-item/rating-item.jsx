import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { ActionCreator } from '../../../store/action';

function RatingItem(props) {
  const {
    index,
    setNewRating,
    newRating,
  } = props;

  const ratingRef = useRef();

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
        onChange={() => {
          setNewRating(ratingRef.current.value);
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
  setNewRating: PropTypes.func.isRequired,
  newRating: PropTypes.string,
};

const mapStateToProps = (state) => ({
  newRating: state.newRating,
});

const mapDispatchToProps = (dispatch) => ({
  setNewRating(value) {
    dispatch(ActionCreator.setNewRating(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingItem);
