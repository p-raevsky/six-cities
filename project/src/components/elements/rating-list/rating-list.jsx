import React from 'react';
import {nanoid} from 'nanoid';

import RatingItem from '../rating-item';

const STARS_NUMBER = 5;

function RatingList() {
  const ratingArray = new Array(STARS_NUMBER).fill(null);

  return (
    <div className="reviews__rating-form form__rating">
      {ratingArray.map((_,i) => <RatingItem index = {i + 1} key = {nanoid()}/>)}
    </div>
  );
}

export default RatingList;
