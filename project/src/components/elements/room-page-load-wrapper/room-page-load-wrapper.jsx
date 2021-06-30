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
  }, [offerId]);

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
  offer: state.offer,
  reviews: state.reviews,
  nearPlaces: state.nearPlaces,
  activePlaceId: state.activePlaceId,
  isOfferDataLoaded: state.isOfferDataLoaded,
  isReviewsDataLoaded: state.isReviewsDataLoaded,
  isNearPlacesDataLoaded: state.isNearPlacesDataLoaded,
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
