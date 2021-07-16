import React from 'react';
import dayjs from 'dayjs';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';

import Image from '../../elements/image';
import PropertyGoodsItem from '../../elements/property-goods-item';
import ReviewsItem from '../../elements/reviews-item';
import ReviewsForm from '../../elements/reviews-form';
import NearPlacesList from '../../elements/near-places-list';
import Map from '../../elements/map';
import Header from '../../elements/header';
import PremiumMark from '../../elements/premium-mark';

import placeCardProp from '../offer.prop';
import reviewCardProp from '../review.prop';

import {getOfferRating} from '../../../utils';
import {isCheckedAuth} from '../../../six-cities-data';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {sendFavoritePlace} from '../../../store/api-actions';

const SLICED_REVIEWS_NUMBER = 10;

function RoomPage(props) {
  const {
    offer,
    reviews,
    nearPlaces,
  } = props;
  const {
    city,
    images,
    isPremium,
    isFavorite,
    title,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    description,
    id,
    host: {
      name,
      avatarUrl,
      isPro,
    } = {},
  } = offer;

  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const status = isFavorite ? '0' : '1';
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

  const isAuth = isCheckedAuth(authorizationStatus);

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((url) => <Image key = {url} url = {url} />)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ? <PremiumMark /> : ''}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button
                  className={`property__bookmark-button button${isFavorite ? ' property__bookmark-button--active' : ''}`}
                  type="button"
                  onClick={() => {
                    dispatch(sendFavoritePlace(id, status));
                  }}
                >
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
                  {goods.map((item) => <PropertyGoodsItem key = {item} goodsItem = {item} />)}
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
                {isAuth && <ReviewsForm id = {id} />}
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map city = {city.name} places = {nearPlaces} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlacesList places = {nearPlaces}/>
          </section>
        </div>
      </main>
    </div>
  );
}

RoomPage.propTypes = {
  offer: placeCardProp,
  reviews: PropTypes.arrayOf(reviewCardProp),
  nearPlaces: PropTypes.arrayOf(placeCardProp),
};

export default RoomPage;
