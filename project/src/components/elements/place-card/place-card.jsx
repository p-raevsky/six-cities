import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {useHistory, Link} from 'react-router-dom';

import PremiumMark from '../premium-mark/premium-mark';

import placeCardProp from '../../pages/offer.prop';
import {getOfferRating} from '../../../utils';
import {PlaceType, AppRoute} from '../../../const';

function PlaceCard(props) {
  const {
    offer: {
      isPremium,
      isFavorite,
      price,
      rating,
      id,
      title,
      type,
      previewImage,
    },
    placesType,
  } = props;

  const [, setActivePlaceId] = useState('');

  const history = useHistory();
  const isBookmarkActiveClassName = isFavorite ? ' place-card__bookmark-button--active' : '';
  const bookmarkClassName = 'place-card__bookmark-button button';
  const offerRating = getOfferRating(rating);
  const placeCardClassName = placesType === PlaceType.CITIES
    ? 'cities__place-card place-card'
    : `${placesType}__card place-card`;

  return (
    <article className={placeCardClassName}
      data-id = {id}
      onMouseEnter = {({currentTarget}) => {
        const currentPlaceId =currentTarget.getAttribute('data-id');
        setActivePlaceId(currentPlaceId);
      }}
    >
      {isPremium && (placesType !== PlaceType.FAVORITES) ? <PremiumMark /> : ''}
      <div className={`${placesType}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage}
            width={placesType !== PlaceType.FAVORITES ? '260' : '150'}
            height={placesType !== PlaceType.FAVORITES ? '200' : '110'}
            alt="Place"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={bookmarkClassName + isBookmarkActiveClassName} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offerRating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link
            onClick={(evt) => {
              evt.preventDefault();
              history.push(`${AppRoute.OFFER}/${id}`);
            }}
          >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PlaceCard.propTypes = {
  offer: placeCardProp,
  placesType: PropTypes.string.isRequired,
};

export default PlaceCard;
