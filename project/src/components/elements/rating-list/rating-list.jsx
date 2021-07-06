import React from 'react';
import {nanoid} from 'nanoid';
import PropTypes from 'prop-types';

import RatingItem from '../rating-item';

const STARS_NUMBER = 5;

function RatingList({isDisabled}) {
  const ratingArray = new Array(STARS_NUMBER).fill(null);

  return (
    <div className="reviews__rating-form form__rating">
      {ratingArray.map((_,i) => <RatingItem index = {5 - i} key = {nanoid()} isDisabled = {isDisabled} />)}
    </div>
  );
}

RatingList.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
};

export default RatingList;
