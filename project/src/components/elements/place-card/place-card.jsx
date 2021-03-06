import React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PremiumMark from '../premium-mark/premium-mark';

import placeCardProp from '../../pages/offer.prop';

import {getOfferRating} from '../../../utils';
import {PlaceType, AppRoute} from '../../../const';
import {PlaceCardType} from '../../../settings';
import {setActivePlaceID} from '../../../store/action';
import {sendFavoritePlace} from '../../../store/api-actions';

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

  const dispatch = useDispatch();
  const offerRating = getOfferRating(rating);
  const status = isFavorite ? '0' : '1';

  return (
    <article className={PlaceCardType[placesType].className}
      data-id = {id}
      onMouseEnter = {({currentTarget}) => {
        const currentPlaceId =currentTarget.getAttribute('data-id');
        dispatch(setActivePlaceID(currentPlaceId));
      }}
    >
      {isPremium && (placesType !== PlaceType.FAVORITES) ? <PremiumMark /> : ''}
      <div className={`${PlaceCardType[placesType].type}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.OFFER}/${id}`}>
          <img className="place-card__image" src={previewImage}
            width={PlaceCardType[placesType].width}
            height={PlaceCardType[placesType].height}
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button${isFavorite ? ' place-card__bookmark-button--active' : ''}`}
            type="button"
            onClick={() => {
              dispatch(sendFavoritePlace(id, status));
            }}
          >
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
          <Link to={`${AppRoute.OFFER}/${id}`}>
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
