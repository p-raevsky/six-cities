import React from 'react';
import dayjs from 'dayjs';

import reviewsProp from '../../pages/review.prop';
import {getOfferRating} from '../../../utils';

function parseDate(date) {
  return dayjs(date).format('MMM YYYY');
}

function ReviewsItem(props) {
  const {
    review: {
      comment,
      date,
      rating,
      user: {
        avatarUrl,
        name,
      },
    },
  } = props;

  const offerRating = getOfferRating(rating);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${offerRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{parseDate(date)}</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewsProp,
};

export default ReviewsItem;
