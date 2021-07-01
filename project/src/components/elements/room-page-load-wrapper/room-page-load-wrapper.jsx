import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RoomPage from '../../pages/room-page';

import {
  fetchHotel,
  fetchNearbyList,
  fetchReviwsList
} from '../../../store/api-actions';
import placeCardProp from '../../pages/offer.prop';
import reviewsProp from '../../pages/review.prop';
import {getActivePlaceId} from '../../../store/process/selectors';
import {
  getOffer,
  getReviews,
  getNearPlaces,
  getIsOfferDataLoaded,
  getIsReviewsDataLoaded,
  getIsNearPlacesDataLoaded
} from '../../../store/data/selectors';

function RoomPageLoadWrapper(props) {
  const {
    offerId,
    getHotelData,
    isOfferDataLoaded,
    isReviewsDataLoaded,
    isNearPlacesDataLoaded,
    getReviewsData,
    getNearHotelsData,
    offer,
    reviews,
    nearPlaces,
  } = props;

  useEffect(() => {
    getHotelData(offerId);
    getReviewsData(offerId);
    getNearHotelsData(offerId);
  }, [offerId, getHotelData, getReviewsData, getNearHotelsData]);

  const isLoaded = isOfferDataLoaded && isReviewsDataLoaded && isNearPlacesDataLoaded;

  return isLoaded && <RoomPage offer = {offer} reviews = {reviews} nearPlaces = {nearPlaces} />;
}

RoomPageLoadWrapper.propTypes = {
  offer: PropTypes.object,
  reviews: PropTypes.arrayOf(reviewsProp),
  nearPlaces: PropTypes.arrayOf(placeCardProp),
  offerId: PropTypes.string,
  isOfferDataLoaded: PropTypes.bool.isRequired,
  isReviewsDataLoaded: PropTypes.bool.isRequired,
  isNearPlacesDataLoaded: PropTypes.bool.isRequired,
  getHotelData: PropTypes.func.isRequired,
  getReviewsData: PropTypes.func,
  getNearHotelsData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  offer: getOffer(state),
  reviews: getReviews(state),
  nearPlaces: getNearPlaces(state),
  activePlaceId: getActivePlaceId(state),
  isOfferDataLoaded: getIsOfferDataLoaded(state),
  isReviewsDataLoaded: getIsReviewsDataLoaded(state),
  isNearPlacesDataLoaded: getIsNearPlacesDataLoaded(state),
});

const mapDispatchToProps = (dispatch) => ({
  getHotelData(id) {
    dispatch(fetchHotel(id));
  },
  getNearHotelsData(id) {
    dispatch(fetchNearbyList(id));
  },
  getReviewsData(id) {
    dispatch(fetchReviwsList(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomPageLoadWrapper);
