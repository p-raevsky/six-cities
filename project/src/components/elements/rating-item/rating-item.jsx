import React from 'react';
import PropTypes from 'prop-types';

function Rating(props) {
  const {index} = props;

  return (
    <React.Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`} type="radio" />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </React.Fragment>
  );
}

Rating.propTypes = {
  index: PropTypes.number.isRequired,
};

export default Rating;
