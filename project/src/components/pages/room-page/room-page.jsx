import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

import Header from '../../elements/header/header';
import PlaceCard from '../../elements/place-card/place-card';
import Image from '../../elements/image/image';
import PropertyGoodsItem from '../../elements/property-goods-item/property-goods-item';
import ReviewsItem from '../../elements/reviews-item/reviews-item';
import ReviewsForm from '../../elements/reviews-form/reviews-form';

import placeCardProp from '../offer.prop';
import reviewsProp from '../review.prop';

import {getOfferRating} from '../../../utils';
import {PlaceType} from '../../../const';

const SLICED_REVIEWS_NUMBER = 10;
const SLICED_PLACES_NUMBER = 3;

function RoomPage(props) {
  const {
    offers,
    reviews,
    nearPlaces,
    itemId,
  } = props;

  const offerInArray = offers.filter((offer) => offer.id === Number(itemId));
  const [currentOffer] = offerInArray;

  const {
    images,
    isPremium,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    host: {
      name,
      avatarUrl,
      isPro,
    },
  } = currentOffer;

  const offerRating = getOfferRating(rating);
  const avatarClassName = `property__avatar-wrapper${isPro ? ' property__avatar-wrapper--pro' : ''} user__avatar-wrapper`;
  const sortedReviews = reviews
    .slice(0, SLICED_REVIEWS_NUMBER)
    .sort((a,b) => {
      const date1 = dayjs(a.date);
      const date2 = dayjs(b.date);

      return date2.diff(date1);
    });
  const bedroomsFeatureLabel = `${bedrooms} ${bedrooms === 1 ? ' Bedroom' : ' Bedrooms'}`;
  const maxAdultsFeatureLabel = `Max ${maxAdults} ${maxAdults === 1 ? ' adult' : ' adults'}`;
  const slicedNearPlaces = nearPlaces.slice(0, SLICED_PLACES_NUMBER);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((url) => <Image key = {url} url = {url}/>)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${offerRating}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating.toFixed(1)}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedroomsFeatureLabel}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdultsFeatureLabel}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => <PropertyGoodsItem key = {item} goodsItem = {item}/>)}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={avatarClassName}>
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  {isPro ?
                    <span className="property__user-status">
                        Pro
                    </span>
                    : ''}
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{sortedReviews.length}</span></h2>
                <ul className="reviews__list">
                  {sortedReviews.map((review) => <ReviewsItem key = {review.id} review = {review} />)}
                </ul>
                {<ReviewsForm />}
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {slicedNearPlaces.map((offer) => <PlaceCard key = {offer.id} offer = {offer} placesType = {PlaceType.NEAR_PLACES}/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offers: PropTypes.arrayOf(placeCardProp),
  reviews: PropTypes.arrayOf(reviewsProp),
  nearPlaces: PropTypes.arrayOf(placeCardProp),
  itemId: PropTypes.PropTypes.string.isRequired,
};

export default RoomPage;
