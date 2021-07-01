import React, {useRef} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setNewRating} from '../../../store/action';
import {getNewRating} from '../../../store//process/selectors';

function RatingItem(props) {
  const {
    index,
    newRating,
    setRating,
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
          setRating(ratingRef.current.value);
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
  newRating: PropTypes.string,
  setRating: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newRating: getNewRating(state),
});

const mapDispatchToProps = (dispatch) => ({
  setRating(value) {
    dispatch(setNewRating(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingItem);
